import { PagerView } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import { alpha } from "@peersyst/react-utils";

export const HomeSliderRoot = styled(PagerView)(({ theme: { palette: p } }) => ({
    marginBottom: "3%",
    minHeight: "33%",
    pagination: { dot: { backgroundColor: alpha(p.white, 0.4), active: { backgroundColor: p.white } } },
}));