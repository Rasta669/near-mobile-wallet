import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { DAOIcon, FilledDAOIcon, FilledNewsIcon, NewsIcon } from "icons";
import { MainBottomScreens } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup";
import { MainStackParamsList } from "stack-navigator";
import { BottomBarRoot } from "./BottomBar.styles";
import BottomBarItem from "./BottomBarItem/BottomBarItem";
import BottomBarLogoItem from "./BottomBarLogoItem/BottomBarLogoItem";
import { translate } from "locale";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type BottomBarProps = Pick<BottomTabBarProps, "state" | "navigation">;

const BottomBar = ({ state, navigation }: BottomBarProps): JSX.Element => {
    const { bottom } = useSafeAreaInsets();

    const activeTab = state.routeNames[state.index];
    const handleNavigation = (link: keyof MainStackParamsList) => {
        if (activeTab !== link) {
            navigation.navigate(link);
        }
    };
    return (
        <BottomBarRoot style={{ paddingBottom: bottom || 10 }}>
            <BottomBarItem
                onPress={() => handleNavigation(MainBottomScreens.DAO)}
                isActive={activeTab === MainBottomScreens.DAO}
                label={translate("DAO")}
                Icon={activeTab === MainBottomScreens.DAO ? <FilledDAOIcon /> : <DAOIcon />}
            />
            <BottomBarLogoItem onPress={() => handleNavigation(MainBottomScreens.HOME)} />
            <BottomBarItem
                onPress={() => handleNavigation(MainBottomScreens.NEWS)}
                isActive={activeTab === MainBottomScreens.NEWS}
                label={translate("news")}
                Icon={activeTab === MainBottomScreens.NEWS ? <FilledNewsIcon /> : <NewsIcon />}
            />
        </BottomBarRoot>
    );
};

export default BottomBar;