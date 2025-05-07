import {HeaderProps} from "./HeaderProps";
import css from './Header.module.css';
import {useNavigate} from "react-router-dom";
import {Tabs} from "@consta/uikit/Tabs";
import {IPageLink} from "./IPageLink";
import {useEffect, useState} from "react";
import {homePageLinkItem, pageLinkItems} from "./PageLinks";

const getItemLabel = (item: IPageLink) => item.title;

export const HeaderComponent = (props: HeaderProps) => {
    const navigate = useNavigate();
    const [value, setValue] = useState<IPageLink>(homePageLinkItem)

    useEffect(() => {
        navigate(value.path);
    }, [navigate, value]);

    return <div className={css.body}>
        <div onClick={() => {setValue(homePageLinkItem);}}>
            Pelmesh
        </div>
        <Tabs
            value={value}
            onChange={setValue}
            items={pageLinkItems}
            getItemLabel={getItemLabel}
        />
    </div>
}