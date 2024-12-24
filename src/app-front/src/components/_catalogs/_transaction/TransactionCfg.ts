import {ICatalogCfg} from "../ICatalogCfg";
import {ITransaction} from "./ITransaction";
import {TransactionSrcCfg} from "./TransactionSrcCfg";
import {TransactionColDefs} from "./TransactionColDef";

export const TransactionCfg: ICatalogCfg<ITransaction> = {
    srcCfg: TransactionSrcCfg,
    colDefs: TransactionColDefs
}