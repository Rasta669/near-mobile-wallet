import { createBackdrop, ExposedBackdropProps, TabPanel, Tabs } from "react-native-components";
import SendToAddressScreen from "module/transaction/screen/SendToAddressScreen/SendToAddressScreen";
import { translate } from "locale";
import { useState } from "react";
import GlassNavigatorModal from "module/common/component/navigation/GlassNavigatorModal/GlassNavigatorModal";
import { useResetRecoilState } from "recoil";
import sendState from "module/transaction/state/SendState";
import SendConfirmationScreen from "module/transaction/screen/SendConfirmationScreen/SendConfirmationScreen";
import SendSetAmountScreen from "module/transaction/screen/SendSetAmountScreen/SendSetAmountScreen";

export enum SendScreens {
    SEND_TO_ADDRESS,
    AMOUNT_AND_MESSAGE,
    CONFIRMATION,
}

const SendModal = createBackdrop(({ onExited, ...rest }: ExposedBackdropProps) => {
    const [activeIndex, setActiveIndex] = useState(SendScreens.SEND_TO_ADDRESS);
    const resetSendState = useResetRecoilState(sendState);

    const handleExited = () => {
        onExited?.();
        resetSendState();
    };

    return (
        <GlassNavigatorModal
            breadcrumbs={{ length: 3, index: activeIndex }}
            navbar={{
                back: true,
                title: translate("send"),
                onBack: activeIndex > 0 ? () => setActiveIndex((oldIndex) => oldIndex - 1) : undefined,
            }}
            onExited={handleExited}
            {...rest}
        >
            <Tabs index={activeIndex} onIndexChange={setActiveIndex}>
                <TabPanel index={SendScreens.SEND_TO_ADDRESS}>
                    <SendToAddressScreen />
                </TabPanel>
                <TabPanel index={SendScreens.AMOUNT_AND_MESSAGE}>
                    <SendSetAmountScreen />
                </TabPanel>
                <TabPanel index={SendScreens.CONFIRMATION}>
                    <SendConfirmationScreen />
                </TabPanel>
            </Tabs>
        </GlassNavigatorModal>
    );
});

export default SendModal;