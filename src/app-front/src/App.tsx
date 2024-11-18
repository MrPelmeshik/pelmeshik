import React, {useState} from 'react';
import css from './App.module.css';
import {MenuComponent} from "./components/Menu/MenuComponent";
import {Grid, GridItem} from "@consta/uikit/Grid";
import {Theme, presetGpnDefault} from "@consta/uikit/Theme";
import {TestBlockComponent} from "./components/TestBlock/TestBlockComponent";
import {Footer} from "./components/Footer/FooterComponent";
import {HeaderComponent} from "./components/Header/HeaderComponent";

export const App = () => {
    const [mainBlock, setMainBlock] = useState<JSX.Element>(<TestBlockComponent />);

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
                <div className={css.mainBlock}>
                    {mainBlock}
                </div>
            </GridItem>
            <GridItem className={css.footer}
                      col={10}
            >
                <Footer />
            </GridItem>
        </Grid>
        {/*<Layout direction={'column'}
                className={css.mainBlock}
        >
            <Layout direction={'row'}
                    flex={1}>
                header
            </Layout>
            <Layout direction={'row'}
                    flex={10}
            >
                <Layout flex={1}>
                    <MenuComponent />
                </Layout>
                <Layout flex={4}>
                    <CardCatalog />
                </Layout>
            </Layout>
        </Layout>*/}
    </Theme>
}
