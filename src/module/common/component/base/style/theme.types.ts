/* eslint-disable @typescript-eslint/no-empty-interface */
import { ShadowPropTypesIOSStatic, StyleProp, TextStyle } from "react-native";
import { TranslateFn } from "../input/TextInput/utils";
import { JSXElementConstructor } from "react";

export type PaletteMode = "light" | "dark";

export interface ThemeIcons {
    info: JSXElementConstructor<any>;
    error: JSXElementConstructor<any>;
    success: JSXElementConstructor<any>;
    warning: JSXElementConstructor<any>;
    invalid: JSXElementConstructor<any>;
    valid: JSXElementConstructor<any>;
    hide: JSXElementConstructor<any>;
    show: JSXElementConstructor<any>;
    cross: JSXElementConstructor<any>;
}

export type TypographyVariants =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button";
export interface TypographyVariantsOverrides {}
export interface DefaultThemeTypography {
    h1: StyleProp<TextStyle>;
    h2: StyleProp<TextStyle>;
    h3: StyleProp<TextStyle>;
    h4: StyleProp<TextStyle>;
    h5: StyleProp<TextStyle>;
    h6: StyleProp<TextStyle>;
    subtitle1: StyleProp<TextStyle>;
    subtitle2: StyleProp<TextStyle>;
    body1: StyleProp<TextStyle>;
    body2: StyleProp<TextStyle>;
    button: StyleProp<TextStyle>;
    caption: StyleProp<TextStyle>;
}
export interface ThemeTypography extends DefaultThemeTypography {}

export interface ThemeFonts {}

export interface DefaultThemePalette {
    mode: PaletteMode;
    primary: string;
    disabled: string;
    background: string;
    backdrop: string;
    text: string;
    status: {
        info: string;
        error: string;
        warning: string;
        success: string;
    };
}
export interface ThemePalette extends DefaultThemePalette {}

export type Shadow = ShadowPropTypesIOSStatic & { elevation?: number | undefined };

export interface DefaultThemeZIndex {
    popover: number;
    modal: number;
    selectMenu: number;
    toast: number;
}
export interface ThemeZIndex extends DefaultThemeZIndex {}

export interface DefaultTheme {
    icons: ThemeIcons;
    typography: ThemeTypography;
    fonts?: ThemeFonts;
    palette: ThemePalette;
    shadows: Shadow[];
    borderRadius: number;
    /*skeletonAnimations: SkeletonAnimation;
    toastAnimation: ToastAnimation;
    toastPosition: ToastPosition;*/
    zIndex: ThemeZIndex;
    translate: TranslateFn;
}
export interface Theme extends DefaultTheme {}
