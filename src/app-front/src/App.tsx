import React, {JSX, useState} from 'react';
import css from './App.module.css';
import {presetGpnDefault, Theme} from "@consta/uikit/Theme";
import {Grid, GridItem} from "@consta/uikit/Grid";
import {HeaderComponent} from "./components/_base/Header/HeaderComponent";
import {MenuComponent} from "./components/_base/Menu/MenuComponent";
import {Footer} from "./components/_base/Footer/FooterComponent";

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
