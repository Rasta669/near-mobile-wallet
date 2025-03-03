import { Row } from "@peersyst/react-native-components";
import { ActionableProps } from "./Actionable.types";
import { TouchableOpacity } from "react-native";
import { ActionRoot } from "./Actionable.styles";

const Actionable = ({ action: actionProp, onAction, position = "right", children, ...rest }: ActionableProps): JSX.Element => {
    const action: JSX.Element = (
        <TouchableOpacity activeOpacity={0.6} onPress={onAction}>
            <ActionRoot>{actionProp}</ActionRoot>
        </TouchableOpacity>
    );

    const [firstItem, secondItem] = position === "left" ? [action, children] : [children, action];

    return (
        <Row justifyContent="center" alignItems="center" {...rest}>
            {firstItem}
            {secondItem}
        </Row>
    );
};

export default Actionable;
