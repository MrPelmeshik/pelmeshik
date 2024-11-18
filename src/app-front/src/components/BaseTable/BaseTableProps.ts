import {TableColumn} from "@consta/table/Table";
import {TableType} from "../../types/TableType";
import {CatalogTypeEnum} from "../_catalogs/CatalogTypeEnum";

export interface BaseTableProps<T> {
    catalogType: CatalogTypeEnum;
    colDef: TableColumn<TableType<T>>[];
}