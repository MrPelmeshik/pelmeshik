import {TableType} from "../../../types/TableType";
import {TableColumn} from "@consta/table/Table";
import {CatalogTypeEnum} from "../../_catalogs/CatalogTypeEnum";
import {AreaEnum} from "../../../types/AreaEnum";

export interface DetailProps<T> {
    close: () => void;
    id: string | number;
    catalogType: CatalogTypeEnum;
    area: AreaEnum;
    colDefs: TableColumn<TableType<T>>[];
}