import {CatalogTypeEnum} from "../../_catalogs/CatalogTypeEnum";
import {TableColDef} from "../TableColDef";
import {TableType} from "../TableType";

export interface TableProps<T> {
    title: string;
    catalogType: CatalogTypeEnum;
    colDefs: TableColDef<T>[];
}