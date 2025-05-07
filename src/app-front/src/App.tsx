import React from 'react';
import css from './App.module.css';
import {presetGpnDefault, Theme} from "@consta/uikit/Theme";
import {Grid, GridItem} from "@consta/uikit/Grid";
import {HeaderComponent} from "./components/_base/Header/HeaderComponent";
import {Footer} from "./components/_base/Footer/FooterComponent";
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "./components/_base/Routes/RoutesComponent";

export const App = () => {

    return <Theme preset={presetGpnDefault}>
        <BrowserRouter>
            <Grid cols={10}
                  className={css.body}
            >
                <GridItem className={css.header}
                          col={10}
                >
                    <HeaderComponent/>
                </GridItem>
                <GridItem className={css.main}
                          col={10}
                >
                    <RoutesComponent />
                </GridItem>
                <GridItem className={css.footer}
                          col={10}
                >
                    <Footer/>
                </GridItem>
            </Grid>
        </BrowserRouter>
    </Theme>
}
