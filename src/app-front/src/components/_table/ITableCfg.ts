import {ISrcCfg} from "../../types/ISrcCfg";
import {IColDef} from "./IColDef";
import {IFieldId} from "../../types/_baseModel/IFieldId";

export interface ITableCfg<T extends IFieldId> {
    srcCfg: ISrcCfg
    colDefs: IColDef<T>[]
}