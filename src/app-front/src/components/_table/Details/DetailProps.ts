import {ISrcCfg} from "../../../types/ISrcCfg";
import {ISelectItem} from "../Table/ISelectItem";
import {IColDef} from "../IColDef";
import {IFieldId} from "../../../types/_baseModel/IFieldId";

export interface DetailProps<T extends IFieldId> {
    title: string;
    close: (copyId?: number | string) => void;
    selectItem: ISelectItem;
    tableSrcCfg: ISrcCfg;
    colDefs: IColDef<T>[];
}