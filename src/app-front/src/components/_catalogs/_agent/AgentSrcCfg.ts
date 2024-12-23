import {TableSrcCfg} from "../../_table/TableSrcCfg";
import {CatalogTypeEnum} from "../CatalogTypeEnum";
import {AreaEnum} from "../../../types/AreaEnum";

export const AgentSrcCfg: TableSrcCfg = {
    catalogType: CatalogTypeEnum.AGENT,
    area: AreaEnum.FINANCE,
    urls: {
        getItems: 'getItems',
        getItem: 'getItem',
        addItem: 'addItem',
        updateItem: 'updateItem',
        deleteItem: 'deleteItem'
    }
}