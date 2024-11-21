import {TableColumn} from "@consta/table/Table";
import {TableType} from "../../types/TableType";
import {CatalogTypeEnum} from "../_catalogs/CatalogTypeEnum";

export interface TableProps<T> {
    catalogType: CatalogTypeEnum;
    colDefs: TableColumn<TableType<T>>[];
}