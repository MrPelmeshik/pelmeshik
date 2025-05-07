import {TaskDetail} from "./TaskDetail";
import {TaskActivity} from "./TaskActivity";

export interface TaskItem {
    detail: TaskDetail,
    activity: TaskActivity[],
}