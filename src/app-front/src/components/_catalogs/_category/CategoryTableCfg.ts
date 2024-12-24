import {ITableCfg} from "../../_table/ITableCfg";
import {ICategory} from "./ICategory";
import {CategorySrcCfg} from "./CategorySrcCfg";
import { CategoryColDefs } from "./CategoryColDefs";

export const CategoryTableCfg: ITableCfg<ICategory> = {
    srcCfg: CategorySrcCfg,
    colDefs: CategoryColDefs
}