import {ICatalogCfg} from "../ICatalogCfg";
import { ICard } from "./ICard";
import {CardSrcCfg} from "./CardSrcCfg";
import { CardColDefs } from "./CardColDefs";

export const CardCfg: ICatalogCfg<ICard> = {
    srcCfg: CardSrcCfg,
    colDefs: CardColDefs,
}