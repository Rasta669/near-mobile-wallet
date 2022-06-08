import useCreateWallet from "module/wallet/hook/useCreateWallet";
import MnemonicPicker from "module/wallet/component/input/MnemonicPicker/MnemonicPicker";
import Card from "module/common/component/surface/Card/Card";
import { Col, Typography } from "react-native-components";
import { translate } from "locale";
import { useToast } from "module/common/component/base/feedback/ToastProvider";

export interface PickWalletMnemonicScreenProps {
    onSubmit: () => void;
}

const PickWalletMnemonicScreen = ({ onSubmit }: PickWalletMnemonicScreenProps): JSX.Element => {
    const {
        state: { mnemonic },
    } = useCreateWallet();
    const { showToast } = useToast();

    return (
        <Card style={{ flex: 1 }}>
            <Col gap={30}>
                <Typography variant="h3" fontWeight="bold" textTransform="uppercase" textAlign="center">
                    {translate("select_in_order")}
                </Typography>
                <MnemonicPicker
                    mnemonic={mnemonic!}
                    onSuccess={onSubmit}
                    onError={() => showToast(translate("incorrect_mnemonic"), { type: "error" })}
                />
            </Col>
        </Card>
    );
};

export default PickWalletMnemonicScreen;