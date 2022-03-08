import { ButtonProps as NativeButtonProps, TextStyle, ViewStyle } from "react-native";
import { SX } from "@peersyst/react-native-styled";
import { ReactElement } from "react";
import { RippleAnimCircleProps } from "module/common/component/util/RippleAnimCircle/RippleAnimCircle.types";

export type IconButtonStyle = ViewStyle & TextStyle;
export type IconButtonStyles = IconButtonStyle & {
    pressed?: IconButtonStyle;
    disabled?: IconButtonStyle;
};

export interface IconButtonSxProps {
    pressed?: boolean;
    disabled?: boolean;
}

export interface IconButtonProps extends RippleAnimCircleProps {
    /**
     * Disables button
     */
    disabled?: boolean;
    /**
     * Button's style
     */
    style?: IconButtonStyles;
    /**
     * Button sx
     */
    sx?: SX<IconButtonSxProps, IconButtonStyles>;
    /**
     * Button's text content
     */
    children: ReactElement;
    /**
     * Should ripple animation be displayed
     */
    withAnimation?: boolean;
} 
