import { useControlled } from "@peersyst/react-hooks";
import useGetBalance from "module/wallet/query/useGetBalance";
import { config } from "config";
import { useNEARAmountInputValidator } from "./hook/useNEARAmountInputValidator";
import { NumericInputProps } from "module/common/component/input/NumericInput/NumericInput";
import BaseAssetAmountInput from "../BaseAssetAmountInput";

export interface NEARAmountInputProps extends Omit<NumericInputProps, "validators" | "suffix"> {
    index: number;
}

const NEARAmountInput = ({ index, disabled, defaultValue = "", value, onChange, error: errorProp, ...rest }: NEARAmountInputProps) => {
    const [amount, setAmount] = useControlled(defaultValue, value, onChange);
    const { error } = useNEARAmountInputValidator({ index, amount });
    const { isLoading } = useGetBalance(index);
    return (
        <BaseAssetAmountInput
            error={errorProp || error}
            value={amount}
            onChange={setAmount}
            loading={isLoading}
            units={config.tokenName}
            {...rest}
        />
    );
};

export default NEARAmountInput;
