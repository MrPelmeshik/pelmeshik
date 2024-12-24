import {ICatalogCfg} from "../ICatalogCfg";
import { IAgent } from "./IAgent";
import {AgentSrcCfg} from "./AgentSrcCfg";
import {AgentColDefs} from "./AgentColDefs";

export const AgentCfg: ICatalogCfg<IAgent> = {
    srcCfg: AgentSrcCfg,
    colDefs: AgentColDefs
}