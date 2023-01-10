import { NumericInput as BaseNumericInput, TextFieldProps } from "@peersyst/react-native-components";
import TextField from "../TextField/TextField";

export type NumericInputProps = Omit<TextFieldProps, "input" | "keyboardType">;

const NumericInputA = (props: NumericInputProps) => {
    return <TextField input={BaseNumericInput} {...props} />;
};

export default NumericInputA;
