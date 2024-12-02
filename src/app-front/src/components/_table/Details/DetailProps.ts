import {CatalogTypeEnum} from "../../_catalogs/CatalogTypeEnum";
import {AreaEnum} from "../../../types/AreaEnum";
import {TableColDef} from "../TableColDef";

export interface DetailProps<T> {
    title: string;
    close: () => void;
    id: string | number | 'new';
    catalogType: CatalogTypeEnum;
    area: AreaEnum;
    colDefs: TableColDef<T>[];
}