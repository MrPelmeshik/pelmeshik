import React, {useState} from 'react';
import css from './App.module.css';
import {MenuComponent} from "./components/Menu/MenuComponent";
import {Grid, GridItem} from "@consta/uikit/Grid";
import {Theme, presetGpnDefault} from "@consta/uikit/Theme";
import {Footer} from "./components/Footer/FooterComponent";
import {HeaderComponent} from "./components/Header/HeaderComponent";

export const App = () => {
    const [mainBlock, setMainBlock] = useState<JSX.Element>(<></>);

    return <Theme preset={presetGpnDefault}>
        <Grid cols={10}
              className={css.body}
        >
            <GridItem className={css.header}
                      col={10}
            >
                <HeaderComponent />
            </GridItem>
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
            <GridItem className={css.footer}
                      col={10}
            >
                <Footer />
            </GridItem>
        </Grid>
    </Theme>
}
