import { useSetTab } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import { AddStakeScreens } from "module/staking/component/core/AddStakeModal/AddStakeModal";
import StakingSetAmountScreen from "../StakingSetAmountScreen";

const AddStakeSetAmountScreen = () => {
    const translate = useTranslate();

    const setTab = useSetTab();

    const handleSubmit = () => setTab(AddStakeScreens.SELECT_VALIDATOR);

    return <StakingSetAmountScreen label={translate("enter_amount_want_to", { action: "stake" })!} onSubmit={handleSubmit} />;
};

export default AddStakeSetAmountScreen;
