import {ICatalogCfg} from "../ICatalogCfg";
import {ITag} from "./ITag";
import {TagSrcCfg} from "./TagSrcCfg";
import {TagColDefs} from "./TagColDefs";

export const TagCfg: ICatalogCfg<ITag> = {
    srcCfg: TagSrcCfg,
    colDefs: TagColDefs
}