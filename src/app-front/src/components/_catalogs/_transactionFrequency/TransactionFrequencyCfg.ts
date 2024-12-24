import {ICatalogCfg} from "../ICatalogCfg";
import {ITransactionFrequency} from "./ITransactionFrequency";
import {TransactionFrequencySrcCfg} from "./TransactionFrequencySrcCfg";
import {TransactionFrequencyColDefs} from "./TransactionFrequencyColDefs";

export const TransactionFrequencyCfg: ICatalogCfg<ITransactionFrequency> = {
    srcCfg: TransactionFrequencySrcCfg,
    colDefs: TransactionFrequencyColDefs
}