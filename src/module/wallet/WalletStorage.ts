import { BaseStorageService } from "module/common/service/BaseStorageService";
import { NetworkType } from "module/settings/state/SettingsState";
import { WalletUtils } from "./utils/WalletUtils";
import {
    SecureWalletStorageType,
    UnsecureWalletStorageType,
    StorageWallet,
    SecureWalletInfo,
    UnencryptedWalletInfo,
    SetWalletsParams,
    WalletStorageType,
} from "./wallet.types";

export const WalletStorage = new (class extends BaseStorageService<SecureWalletStorageType, UnsecureWalletStorageType> {
    constructor() {
        super("wallet");
    }

    /**
     * STORAGE METHODS
     */
    async getPin(): Promise<WalletStorageType["pin"]> {
        const secureStorage = await this.getSecure();
        return secureStorage?.pin;
    }

    async setPin(pin: string): Promise<void> {
        const secureStorage = await this.getSecure();
        if (secureStorage) {
            return this.setSecure({ ...secureStorage, pin });
        } else {
            /* eslint-disable no-console */
            console.warn("You should not set a pin if you don't have a mnemonic");
            return;
        }
    }

    async getMnemonic(): Promise<WalletStorageType["mnemonic"]> {
        return (await this.getSecure())?.mnemonic;
    }

    async setMnemonic(mnemonic: string): Promise<void> {
        const secureStorage = await this.getSecure();
        if (secureStorage) {
            return this.setSecure({ ...secureStorage, mnemonic });
        } else {
            /* eslint-disable no-console */
            console.warn("You should not set a mnemonic if you don't have a pin");
            return;
        }
    }

    /**
     * WALLET STORAGE METHODS
     */
    async setWallets({ network, wallets, secureWallets }: SetWalletsParams): Promise<void> {
        await this.setSecureWallets(secureWallets, network);
        await this.setUnencryptedWallets(wallets, network);
    }

    async removeWallet(index: number, network: NetworkType): Promise<void> {
        await this.removeUnencryptedWallet(index, network);
        await this.deleteSecureWalletId(index, network);
    }
    /**
     * Return all the wallets with their info ordered by index
     */
    async getWallets(network: NetworkType): Promise<StorageWallet[]> {
        return this.getUnencryptedWallets(network);
    }

    /**
     * SECURE WALLETS METHODS
     */
    async getSecureWallets(network: NetworkType): Promise<SecureWalletInfo[]> {
        return (await this.getSecure())?.[network] || [];
    }

    async getSecureWalletGroup(privateKey: string, network: NetworkType): Promise<SecureWalletInfo | undefined> {
        const wallets = await this.getSecureWallets(network);
        return WalletUtils.findByPrivateKey(privateKey, wallets);
    }

    async getWalletsIdsFromPrivateKey(privateKey: string, network: NetworkType): Promise<SecureWalletInfo["walletIds"] | undefined> {
        const walletGroup = await this.getSecureWalletGroup(privateKey, network);
        return walletGroup?.walletIds;
    }

    async setSecureWallets(wallets: SecureWalletInfo[], network: NetworkType, secureStorageParam?: SecureWalletStorageType): Promise<void> {
        const secureStorage = secureStorageParam ||
            (await this.getSecure()) || { pin: undefined, mnemonic: undefined, testnet: [], mainnet: [] };
        await this.setSecure({ ...secureStorage, [network]: wallets });
    }

    async setSecureWalletId(walletId: number, privateKey: string, network: NetworkType): Promise<void> {
        await this.setSecureWalletIds([walletId], privateKey, network);
    }

    async setSecureWalletIds(walletIds: number[], privateKey: string, network: NetworkType): Promise<void> {
        const secureStorage = (await this.getSecure()) || { pin: undefined, mnemonic: undefined, testnet: [], mainnet: [] };
        const secureWallets = secureStorage[network];
        const walletGroup = WalletUtils.findByPrivateKey(privateKey, secureWallets);
        let wallets: SecureWalletInfo[];
        if (walletGroup) {
            const newIds = WalletUtils.getNewIds(walletGroup, walletIds);
            wallets = [
                ...WalletUtils.deleteWalletFromPrivateKey(privateKey, secureWallets),
                { privateKey: walletGroup.privateKey, walletIds: [...walletGroup.walletIds, ...newIds] },
            ];
        } else {
            wallets = [...secureWallets, { privateKey, walletIds }];
        }
        await this.setSecureWallets(wallets, network, secureStorage);
    }

    async deleteSecureWalletId(walletIdToBeDeleted: number, network: NetworkType): Promise<void> {
        const secureStorage = (await this.getSecure()) || { pin: undefined, mnemonic: undefined, testnet: [], mainnet: [] };
        const wallets = secureStorage[network];
        const newWallets = WalletUtils.deleteWalletId(walletIdToBeDeleted, wallets);
        await this.setSecureWallets(newWallets, network, secureStorage);
    }

    /**
     * UNENCRYPTED WALLETS METHODS
     */
    async getUnencryptedWallets(network: NetworkType): Promise<UnencryptedWalletInfo[]> {
        return WalletUtils.orderWallets((await this.get())?.[network] || []);
    }

    async getUnencryptedWallet(index: number, network: NetworkType): Promise<UnencryptedWalletInfo | undefined> {
        const wallets = await this.getUnencryptedWallets(network);
        return WalletUtils.getWallet(index, wallets);
    }

    async setUnencryptedWallets(
        wallets: UnencryptedWalletInfo[],
        network: NetworkType,
        storageParam?: UnsecureWalletStorageType,
    ): Promise<void> {
        const storage = storageParam || (await this.get()) || { testnet: [], mainnet: [] };
        await this.set({ ...storage, [network]: wallets });
    }

    async addUnencryptedWallets(
        newWallets: UnencryptedWalletInfo[],
        network: NetworkType,
        storageParam?: UnsecureWalletStorageType,
    ): Promise<void> {
        const storage = storageParam || (await this.get()) || { testnet: [], mainnet: [] };
        const oldWallets = storage[network];
        await this.set({ ...storage, [network]: [...oldWallets, ...newWallets] });
    }

    async setUnencryptedWallet(wallet: UnencryptedWalletInfo, network: NetworkType, index?: number): Promise<void> {
        const storage = await this.get();
        const wallets = WalletUtils.orderWallets(storage?.[network] || []);
        if (storage && wallets) {
            const newWallets = WalletUtils.setWallet(wallets, wallet, index ?? wallets.length);
            await this.setUnencryptedWallets(newWallets, network, storage);
        }
    }

    async removeUnencryptedWallet(index: number, network: NetworkType): Promise<void> {
        const storage = await this.get();
        const wallets = WalletUtils.orderWallets(storage?.[network] || []);
        if (storage && wallets) {
            const newWallets = WalletUtils.deleteWallet(wallets, index);
            await this.setUnencryptedWallets(newWallets, network, storage);
        }
    }

    async getUncommittedTransactionHashes(
        index: number,
        network: NetworkType,
    ): Promise<UnencryptedWalletInfo["uncommittedTransactionHashes"]> {
        return (await this.getUnencryptedWallet(index, network))?.uncommittedTransactionHashes;
    }

    async updateUncommitedTransactionHashes(
        index: number,
        network: NetworkType,
        hashes: string[],
        storageParam?: UnsecureWalletStorageType,
    ): Promise<void> {
        const storage = storageParam || (await this.get());
        if (!storage) return;
        const wallets = WalletUtils.orderWallets(storage[network] || []);
        const newWallets = WalletUtils.updateWalletUncommittedTxHashes(wallets, hashes, index);
        return this.setUnencryptedWallets(newWallets, network, storage);
    }

    async addUncommittedTransactionHash(index: number, network: NetworkType, hash: string): Promise<void> {
        const storage = await this.get();
        if (!storage) return;
        const uncommittedTransactionHashes = (await this.getUncommittedTransactionHashes(index, network)) || [];
        return this.updateUncommitedTransactionHashes(index, network, [...uncommittedTransactionHashes, hash], storage);
    }

    async removeUncommittedTransactionHash(index: number, network: NetworkType, hash: string): Promise<void> {
        const storage = await this.get();
        const wallets = storage?.[network];
        const uncommittedTransactionHashes = WalletUtils.getWallet(index, wallets)?.uncommittedTransactionHashes;
        if (!storage || !wallets || !uncommittedTransactionHashes) return;
        const newWallets = WalletUtils.removeWalletUncommittedTxHash(wallets, index, hash);
        return this.setUnencryptedWallets(newWallets, network, storage);
    }
})();
