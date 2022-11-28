
import { AddTransaction } from "./AddTransaction";
import { Balance } from "./Balance";
import { Header } from "./Header";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";

export default function Budget(){
    return(
        <div>
            <Header/>
            <AddTransaction/>
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
        </div>
    );
}