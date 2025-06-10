import {IBaseToDoItem} from "./IBaseToDoItem";
import {IFeature} from "./IFeature";

export interface IEpic extends IBaseToDoItem {
    items: IFeature[];
}