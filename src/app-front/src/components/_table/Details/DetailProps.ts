import {ISrcCfg} from "../../../types/ISrcCfg";
import {ISelectItem} from "../Table/ISelectItem";
import {ITableColDef} from "../ITableColDef";

export interface DetailProps<T> {
    title: string;
    close: (copyId?: number | string) => void;
    selectItem: ISelectItem;
    tableSrcCfg: ISrcCfg;
    colDefs: ITableColDef<T>[];
}