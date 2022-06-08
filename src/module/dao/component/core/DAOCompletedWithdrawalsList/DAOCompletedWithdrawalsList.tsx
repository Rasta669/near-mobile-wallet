import MainList from "module/main/component/display/MainList/MainList";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import TransactionCard from "module/transaction/component/display/TransactionCard/TransactionCard";
import useGetTransactions from "module/transaction/query/useGetTransactions";
import { isUnlockOrWithdrawDAO } from "../../../utils/isUnlockOrWithdrawDAO";

const DAOCompletedWithdrawalsList = (): JSX.Element => {
    const { data = [], isLoading } = useGetTransactions({ filter: (tx) => isUnlockOrWithdrawDAO(tx.type) });

    return (
        <MainList
            loading={isLoading}
            data={data}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            renderItem={({ item: tx }) => <TransactionCard transaction={tx} />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default DAOCompletedWithdrawalsList;