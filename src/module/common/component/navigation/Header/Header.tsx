import { HeaderRoot } from "./Header.styles";
import Toolbar from "../../layout/Toolbar/Toolbar";
import LogoRow from "module/common/component/display/Logos/LogoRow/LogoRow";
import { IconButton, Row } from "react-native-components";
import { SettingsIcon } from "icons";
import useNavigation from "../../../hook/useNavigation";
import FaucetButton from "module/wallet/component/input/FaucetButton/FaucetButton";
import { useRecoilValue } from "recoil";
import settingsState from "module/settings/state/SettingsState";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface HeaderProps {
    showIcons?: boolean;
}

const Header = ({ showIcons = true }: HeaderProps): JSX.Element => {
    const navigation = useNavigation();
    const { network } = useRecoilValue(settingsState);
    const { top } = useSafeAreaInsets();
    return (
        <HeaderRoot elevation={6} square style={{ paddingTop: top }}>
            <Toolbar>
                <Row alignItems="center" justifyContent="space-between" flex={1}>
                    <LogoRow />
                    {showIcons && (
                        <Row gap={16}>
                            {network === "testnet" && <FaucetButton />}
                            <IconButton onPress={() => navigation.navigate("Settings")}>
                                <SettingsIcon />
                            </IconButton>
                        </Row>
                    )}
                </Row>
            </Toolbar>
        </HeaderRoot>
    );
};

export default Header;