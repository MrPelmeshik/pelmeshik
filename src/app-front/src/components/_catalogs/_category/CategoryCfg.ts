import {ICatalogCfg} from "../ICatalogCfg";
import {ICategory} from "./ICategory";
import {CategorySrcCfg} from "./CategorySrcCfg";
import { CategoryColDefs } from "./CategoryColDefs";

export const CategoryCfg: ICatalogCfg<ICategory> = {
    srcCfg: CategorySrcCfg,
    colDefs: CategoryColDefs
}