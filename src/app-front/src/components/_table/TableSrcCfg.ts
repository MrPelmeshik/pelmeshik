import { AreaEnum } from "../../types/AreaEnum";
import { CatalogTypeEnum } from "../_catalogs/CatalogTypeEnum";

export interface TableSrcCfg {
    catalogType: CatalogTypeEnum,
    area: AreaEnum,
    urls: {
        getItems: string,
        getItem: string,
        addItem: string,
        updateItem: string,
        deleteItem: string
    }
}