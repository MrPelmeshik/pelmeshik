import {IBaseToDoItem} from "./IBaseToDoItem";
import {ITask} from "./ITask";

export interface IFeature extends IBaseToDoItem {
    items: ITask[];
}