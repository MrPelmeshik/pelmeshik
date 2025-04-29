import {ToDoProps} from "./ToDoProps";
import css from './ToDo.module.css';
import {JSX} from "react";

export const ToDoComponent = (props: ToDoProps) : JSX.Element => {
    return <div className={css.body}>
        test
    </div>
}