import {ITableCfg} from "../../_table/ITableCfg";
import { ICard } from "./ICard";
import {CardSrcCfg} from "./CardSrcCfg";
import { CardColDefs } from "./CardColDefs";

export const CardTableCfg: ITableCfg<ICard> = {
    srcCfg: CardSrcCfg,
    colDefs: CardColDefs,
}