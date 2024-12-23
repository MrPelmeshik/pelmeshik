import {CatalogTypeEnum} from "../../_catalogs/CatalogTypeEnum";
import {AreaEnum} from "../../../types/AreaEnum";
import {TableColDef} from "../TableColDef";
import {ISelectItem} from "../Table/ISelectItem";
import {TableSrcCfg} from "../TableSrcCfg";

export interface DetailProps<T> {
    title: string;
    close: (copyId?: number | string) => void;
    selectItem: ISelectItem;
    tableSrcCfg: TableSrcCfg;
    colDefs: TableColDef<T>[];
}