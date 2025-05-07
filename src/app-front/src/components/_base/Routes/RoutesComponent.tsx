import React, {JSX, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ToDoComponent} from "../../_todo/ToDo/ToDoComponent";
import {RoutesProps} from "./RoutesProps";
import {GridItem} from "@consta/uikit/Grid";
import css from "../../../App.module.css";
import {MenuComponent} from "../Menu/MenuComponent";

export const RoutesComponent = (props: RoutesProps) : JSX.Element => {
    const [mainBlock, setMainBlock] = useState<JSX.Element>(<></>);

    return <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/finance" element={<>
            <GridItem className={css.menu}
                      col={2}
            >
                <MenuComponent setMainBlock={setMainBlock}/>
            </GridItem>
            <GridItem className={css.main}
                      col={8}
            >
                {mainBlock}
            </GridItem>
        </>} />
        <Route path="/todo" element={<ToDoComponent/>}/>
    </Routes>
}