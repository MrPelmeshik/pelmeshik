import {SelectItemTypeEnum} from "../SelectItemTypeEnum";

export interface ISelectItem {
    id?: number | string;
    type: SelectItemTypeEnum;
}