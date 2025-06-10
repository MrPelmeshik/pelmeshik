import {IBaseToDoItem} from "./IBaseToDoItem";
import {ISubtask} from "./ISubtask";

export interface ITask extends IBaseToDoItem{
    items?: ISubtask[];
}