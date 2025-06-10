import { GridItem } from "@consta/uikit/Grid";
import { JSX, useState } from "react";
import css from "../../../App.module.css";
import { MenuComponent } from "../../_base/Menu/MenuComponent";
import { FinanceProps } from "./FinanceProps";


export const FinanceComponent = (props: FinanceProps) : JSX.Element => {
    const [mainBlock, setMainBlock] = useState<JSX.Element>(<></>);
    
    return <>
        <GridItem className={css.menu}
            col={2}
        >
            <MenuComponent setMainBlock={setMainBlock} />
        </GridItem>
        <GridItem className={css.main}
            col={8}
        >
            {mainBlock}
        </GridItem>
    </>
}