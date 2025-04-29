import {ITableCfg} from "../../_table/ITableCfg";
import {ITransaction} from "./ITransaction";
import {TransactionSrcCfg} from "./TransactionSrcCfg";
import {TransactionColDefs} from "./TransactionColDef";

export const TransactionTableCfg: ITableCfg<ITransaction> = {
    srcCfg: TransactionSrcCfg,
    colDefs: TransactionColDefs
}