import { Backdrop, ExposedBackdropProps } from "@peersyst/react-native-components";
import CardNavigator, { CardNavigatorProps } from "module/common/component/navigation/CardNavigator/CardNavigator";

const CardNavigatorModal = ({
    navbar: { back, onBack, ...restNavProps } = {},
    children,
    style,
    open,
    closable = true,
    onClose,
    ...backdropProps
}: ExposedBackdropProps & CardNavigatorProps): JSX.Element => {
    return (
        <Backdrop closable={closable} onClose={onClose} {...backdropProps} open={open}>
            {(_open, setOpen) => (
                <CardNavigator
                    navbar={{
                        back: back && closable,
                        onBack:
                            onBack ||
                            (() => {
                                setOpen(false);
                                if (open !== undefined) onClose?.();
                            }),
                        ...restNavProps,
                    }}
                    style={{ ...style, height: "100%", backgroundColor: "yellow" }}
                >
                    {children}
                </CardNavigator>
            )}
        </Backdrop>
    );
};

export default CardNavigatorModal;
