import {ISrcCfg} from "../../types/ISrcCfg";
import {ITableColDef} from "../_table/ITableColDef";

export interface ICatalogCfg<T> {
    srcCfg: ISrcCfg
    colDefs: ITableColDef<T>[]
}