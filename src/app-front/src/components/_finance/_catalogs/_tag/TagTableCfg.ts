import {ITableCfg} from "../../_table/ITableCfg";
import {ITag} from "./ITag";
import {TagSrcCfg} from "./TagSrcCfg";
import {TagColDefs} from "./TagColDefs";

export const TagTableCfg: ITableCfg<ITag> = {
    srcCfg: TagSrcCfg,
    colDefs: TagColDefs
}