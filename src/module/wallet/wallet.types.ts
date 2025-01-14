import { NetworkType } from "module/settings/state/SettingsState";
import { NftToken, Token } from "near-peersyst-sdk";

export enum AssetType {
    TOKEN = "token",
    FT = "ft",
    NFT = "nft",
} //token refers as near token

export interface Asset {
    type: AssetType;
    nft?: NftToken;
    ft?: Token;
}

export interface BaseWallet {
    index: number;
}

/**
 * STORAGE TYPES
 */
export interface UnencryptedWalletInfo extends BaseWallet {
    account: string;
}

export interface UnsecureWalletStorageType {
    testnet: [];
    mainnet: UnencryptedWalletInfo[];
}

export interface SecureWalletInfo {
    privateKey: string;
    walletIds: number[];
}

export interface SecureWalletStorageType {
    testnet: SecureWalletInfo[];
    mainnet: SecureWalletInfo[];
    pin: string | undefined;
    mnemonic: string | undefined;
    mainPrivateKey: string | undefined;
}

export type StorageWallet = UnencryptedWalletInfo;

export interface WalletStorageType {
    pin: SecureWalletStorageType["pin"];
    mnemonic: SecureWalletStorageType["mnemonic"];
    testnet: StorageWallet[];
    mainnet: StorageWallet[];
}

export interface SetWalletsParams {
    wallets: StorageWallet[];
    secureWallets: SecureWalletInfo[];
    network: NetworkType;
}

export interface BaseWalletWithFormScreenProps {
    onSubmit: () => void;
    submitText?: string;
}
