import {ITableCfg} from "../../_table/ITableCfg";
import {ITransactionFrequency} from "./ITransactionFrequency";
import {TransactionFrequencySrcCfg} from "./TransactionFrequencySrcCfg";
import {TransactionFrequencyColDefs} from "./TransactionFrequencyColDefs";

export const TransactionFrequencyTableCfg: ITableCfg<ITransactionFrequency> = {
    srcCfg: TransactionFrequencySrcCfg,
    colDefs: TransactionFrequencyColDefs
}