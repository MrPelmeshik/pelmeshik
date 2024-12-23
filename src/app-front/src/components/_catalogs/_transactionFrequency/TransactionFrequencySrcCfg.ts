import {TableSrcCfg} from "../../_table/TableSrcCfg";
import {CatalogTypeEnum} from "../CatalogTypeEnum";
import {AreaEnum} from "../../../types/AreaEnum";

export const TransactionFrequencySrcCfg: TableSrcCfg = {
    catalogType: CatalogTypeEnum.TRANSACTION_FREQUENCY,
    area: AreaEnum.FINANCE,
    urls: {
        getItems: 'getItems',
        getItem: 'getItem',
        addItem: 'addItem',
        updateItem: 'updateItem',
        deleteItem: 'deleteItem'
    }
}