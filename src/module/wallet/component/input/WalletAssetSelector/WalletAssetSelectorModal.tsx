import { Col, Row } from "@peersyst/react-native-components";
import Typography from "module/common/component/display/Typography/Typography";
import CardNavigatorModal from "module/common/component/navigation/CardNavigatorModal/CardNavigatorModal";
import { NavbarTitle } from "module/common/component/navigation/Navbar/Navbar";
import { useTranslate } from "module/common/hook/useTranslate";
import { ChevronUpIcon } from "module/common/icons/ChevronUpIcon";
import { useState } from "react";
import { WalletAssetSelectorModalProps } from "./WalletAssetSelector.types";

export const WalletAssetSelectorModal = ({ children, navbar, ...rest }: WalletAssetSelectorModalProps) => {
    const [open, setOpen] = useState(false);
    const translate = useTranslate();
    const hideModal = () => setOpen(false);
    return (
        <>
            {children({ showModal: () => setOpen(true), hideModal })}
            <CardNavigatorModal
                navbar={{
                    children: (
                        <Row flex={1} justifyContent="center">
                            <NavbarTitle title={translate("choose_what_to_send")} />
                            <Row style={{ position: "absolute", right: 0, top: 0 }}>
                                <ChevronUpIcon onPress={hideModal} />
                            </Row>
                        </Row>
                    ),
                    ...navbar,
                }}
                {...rest}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Col style={{ height: 300 }}>
                    <Typography variant="body2Strong">{"Seleccionar el token"}</Typography>
                </Col>
            </CardNavigatorModal>
        </>
    );
};
