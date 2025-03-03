import useGetStakingDetailsSections from "module/staking/hook/useGetStakingDetailsSections";
import MainList from "module/main/component/display/MainList/MainList";
import StakingDetailCard from "../StakingDetailCard/StakingDetailCard";

const MyStakingList = (): JSX.Element => {
    const { sections, isLoading, refetch } = useGetStakingDetailsSections();

    return (
        <MainList
            loading={isLoading}
            onRefresh={refetch}
            data={sections}
            renderItem={({ item: { title, ...rest } }) => <StakingDetailCard key={title} title={title} isLoading={isLoading} {...rest} />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default MyStakingList;
