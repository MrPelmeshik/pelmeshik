import {JSX} from "react";
import {Route, Routes} from "react-router-dom";
import {RoutesProps} from "./RoutesProps";
import { pageLinkItems } from "../Header/PageLinks";

export const RoutesComponent = (props: RoutesProps) : JSX.Element => {
    return <Routes>
        {pageLinkItems.map((item) => (
            <Route 
                key={item.path}
                path={item.path}
                element={item.element ? <item.element /> : <></>}
            />
        ))}
    </Routes>
}