import {JSX} from "react";
import {Route, Routes} from "react-router-dom";
import {ToDoComponent} from "../../_todo/ToDo/ToDoComponent";
import {RoutesProps} from "./RoutesProps";
import { FinanceComponent } from "../../_finance/Finance/FinanceComponent";

export const RoutesComponent = (props: RoutesProps) : JSX.Element => {

    return <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/finance" element={<FinanceComponent/>} />
        <Route path="/todo" element={<ToDoComponent/>}/>
    </Routes>
}