import {ICatalogCfg} from "../../_catalogs/ICatalogCfg";

export interface TableProps<T> {
    title: string;
    configuration: ICatalogCfg<T>;
}