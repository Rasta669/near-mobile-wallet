import TokensList from "module/token/component/core/TokensList/TokensList";
import { render, translate, waitFor } from "test-utils";
import { TokensMock, UseGetTokensMock, UseWalletStateMock } from "test-mocks";

describe("Renders the token list properly", () => {
    new UseWalletStateMock();

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly", async () => {
        const { tokens } = new TokensMock();
        new UseGetTokensMock({ fts: tokens });
        const screen = render(<TokensList />);
        await waitFor(() => expect(screen.getAllByText("Bitcoin")));
    });

    test("Renders empty token list", async () => {
        const { serviceInstance } = new UseGetTokensMock({ fts: [] });
        const screen = render(<TokensList />);
        await waitFor(() => expect(serviceInstance.getAccountTokens).toBeCalled());
        await waitFor(() => expect(screen.getAllByText(translate("no_tokens", { ns: "error" }))));
    });
});
