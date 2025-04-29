import {ITableCfg} from "../ITableCfg";
import {IFieldId} from "../../../../types/_baseModel/IFieldId";

export interface TableProps<T extends IFieldId> {
    title: string;
    tableCfg: ITableCfg<T>;
}