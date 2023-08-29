import styled from "@peersyst/react-native-styled";
import Select from "module/common/component/input/Select/Select";

export const DAppTagSelectRoot = styled(Select)(() => ({
    minWidth: "33%",
    maxWidth: "33%",
    flex: 1,
    component: {
        display: {
            height: "100%",
            minHeight: 45,
            paddingHorizontal: 20,
            paddingVertical: 10,
        },
    },
})) as typeof Select;
