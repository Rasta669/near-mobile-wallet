import { AuthScreens } from "module/auth/AuthNavigatorGroup";
import { AnimatedAuthSwitchScreenRoot } from "./AuthSwitchScreen.styles";
import { useTabs } from "@peersyst/react-native-components";
import { useLogoPageFlex, useLogoPageGradient } from "module/common/component/layout/LogoPage/LogoPageContext";
import { useTranslate } from "module/common/hook/useTranslate";
import Button from "module/common/component/input/Button/Button";

const AuthSwitchScreen = (): JSX.Element => {
    const setTab = useTabs()[1];
    useLogoPageFlex(1);
    useLogoPageGradient(true);

    const translate = useTranslate();
    return (
        <AnimatedAuthSwitchScreenRoot in={true} appear>
            <Button variant="secondary" size="lg" fullWidth onPress={() => setTab(AuthScreens.CREATE_WALLET)}>
                {translate("create_wallet")}
            </Button>
            <Button variant="tertiary" size="lg" fullWidth onPress={() => setTab(AuthScreens.IMPORT_WALLET)}>
                {translate("importYourNearWallet")}
            </Button>
        </AnimatedAuthSwitchScreenRoot>
    );
};

export default AuthSwitchScreen;
