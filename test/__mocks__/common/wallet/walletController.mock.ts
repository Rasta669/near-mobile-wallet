import { SecureWalletInfoMock, UnencryptedWalletInfoMock } from "mocks/storage";
import { CreateInstanceReturn } from "module/wallet/state/ServiceInstance/ServiceInstance.types";
import WalletController from "module/wallet/utils/WalletController";
import { UnencryptedWalletInfo } from "module/wallet/wallet.types";
import BaseMock, { MockFnType } from "../base.mock";
import { WalletMock } from "./wallet.mock";

export class ImportWalletsReturnMock extends BaseMock {
    wallets: WalletMock[];
    newStorageWallets: UnencryptedWalletInfoMock[];
    newSecureWallets: SecureWalletInfoMock[];
    updateSecure: boolean;
    constructor({
        wallets = [],
        newStorageWallets = [],
        newSecureWallets = [],
        updateSecure = false,
    }: Partial<ImportWalletsReturnMock> = {}) {
        super();
        this.wallets = wallets;
        this.newStorageWallets = newStorageWallets;
        this.newSecureWallets = newSecureWallets;
        this.updateSecure = updateSecure;
    }
}

interface WalletControllerRecoverMockType {
    recoverWallets: MockFnType;
    returnMock: ImportWalletsReturnMock;
}

export class WalletControllerRecoverMock extends BaseMock implements WalletControllerRecoverMockType {
    recoverWallets: MockFnType;
    returnMock: ImportWalletsReturnMock;
    constructor({ recoverWallets, returnMock = new ImportWalletsReturnMock() }: Partial<WalletControllerRecoverMockType> = {}) {
        super();
        this.returnMock = returnMock;
        this.recoverWallets = recoverWallets ?? jest.fn().mockResolvedValue(returnMock);
        this.mock = jest.spyOn(WalletController, "recoverWallets").mockImplementation(this.recoverWallets);
    }
}

export class WalletControllerMocks extends BaseMock {
    accounts: CreateInstanceReturn[] = [];
    walletIds: number[] = [];
    storageWallets: UnencryptedWalletInfo[] = [];
    constructor(length: number, privateKey: string, startIndex = 0, imported = false) {
        super();
        const accounts: CreateInstanceReturn[] = [];
        const walletIds: number[] = [];
        const storageWallets: UnencryptedWalletInfo[] = [];
        for (const [i] of [...Array(length)].entries()) {
            const index = startIndex + i;
            const account = "acc - " + index;
            accounts.push({
                privateKey,
                account,
            });
            walletIds.push(index);
            storageWallets.push({
                account,
                index: index,
                ...(imported && { imported: true }),
            });
        }
        this.accounts = accounts;
        this.walletIds = walletIds;
        this.storageWallets = storageWallets;
    }
}
