import {TableColDef} from "../TableColDef";
import {TableSrcCfg} from "../TableSrcCfg";

export interface TableProps<T> {
    title: string;
    tableSrcCfg: TableSrcCfg;
    colDefs: TableColDef<T>[];
}