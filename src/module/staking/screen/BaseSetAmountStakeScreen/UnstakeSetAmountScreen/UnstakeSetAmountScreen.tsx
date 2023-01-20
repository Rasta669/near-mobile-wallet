import BaseSetAmountStakeScreen from "module/staking/screen/BaseSetAmountStakeScreen/BaseSetAmountStakeScreen";
import { useTranslate } from "module/common/hook/useTranslate";
import { Col, Label, useSetTab } from "@peersyst/react-native-components";
import { useRecoilState, useResetRecoilState } from "recoil";
import stakeState from "module/staking/state/StakeState";
import ValidatorInformation from "module/staking/component/display/ValidatorInformation/ValidatorInformation";
import { UnstakeModalScreens } from "module/staking/component/core/UnstakeModal/UnstakeModal";

const UnstakeSetAmountScreen = (): JSX.Element => {
    const translate = useTranslate();
    const setTab = useSetTab();

    const [{ validator }] = useRecoilState(stakeState);
    const resetStakeState = useResetRecoilState(stakeState);

    const handleSubmit = () => setTab(UnstakeModalScreens.CONFIRM_VALIDATOR);
    const onEditAction = () => {
        resetStakeState();
        setTab(UnstakeModalScreens.SELECT_VALIDATOR);
    };

    return (
        <BaseSetAmountStakeScreen
            maxAmount={validator?.stakingBalance?.staked}
            label={translate("enter_amount_want_to", { action: "unstake" })}
            onSubmit={handleSubmit}
        >
            <Col>
                <Label label={translate("from")!} />
                <ValidatorInformation validator={validator!} showEdit onEdit={onEditAction} />
            </Col>
        </BaseSetAmountStakeScreen>
    );
};

export default UnstakeSetAmountScreen;