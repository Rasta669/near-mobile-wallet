import { createTheme, Theme } from "@peersyst/react-native-components";
import { theme } from "./theme";

const gray: Theme["palette"]["gray"] = {
    0: "#FFFFFF",
    300: "#A7A7A7",
    600: "#3F4246",
    900: "#262626",
};
const blue = "#5F8AFA";
const green = "#AAD055";
const gold = "#FFC860";
const red = "#DB5555";
const aqua = "#4FD1D9";
const purple = "#6B6EF9";
const lilac = "#A463B0";
const orange = "#E3935B";
const gradient: Theme["palette"]["gradient"] = {
    lilacBlue: [lilac, blue],
    lilacOrange: [lilac, orange],
    lilacRed: [lilac, red],
    blueGreen: [blue, green],
    blueTurquoise: [blue, aqua],
    bluePurple: [blue, purple],
    purpleLilac: [purple, lilac],
    purpleTurquoise: [purple, aqua],
    purpleRed: [purple, red],
    redOrange: [red, orange],
    orangeYellow: [orange, gold],
    greenYellow: [green, gold],
};
const overlay: Theme["palette"]["overlay"] = {
    "80%": "#262626CC",
    "60%": "#26262699",
    "40%": "#26262666",
    "20%": "#26262633",
    "12%": "#2626261F",
    "8%": "#26262614",
};

const lightTheme = createTheme({
    ...theme,
    palette: {
        mode: "light",
        background: gray[0],
        primary: blue,
        text: gray[600],
        // CKBULL
        white: "#FFFFFF",
        black: "#0B0D1E",
        fullBlack: "#000000",
        darkGray: "#707070",
        darkLightGray: "#B0B0B0",
        darkLightGray2: "#808080",
        darkGray2: "#444444",
        darkFont: "#343434",
        turquoise: "#15C8BD",
        violet: "#924AD9",
        pink: "#FF66B0",
        darkerGray: "#141414",
        lightGray: "#F4F4F4",
        lighterGray: "#EFEFEF",
        wallet: ["#15C8BD", "#47B5D6", "#623EDF", "#924AD9", "#FF66B0", "#E4AF4C"],
        // NEAR
        gray,
        blue,
        green,
        gold,
        red,
        aqua,
        purple,
        lilac,
        orange,
        gradient,
        overlay,
        status: {
            info: blue,
            success: green,
            warning: orange,
            error: red,
        },
        appbar: gray[0],
        paper: gray[0],
        backdrop: overlay["60%"],
    },
});

export default lightTheme;