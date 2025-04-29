import {ITableCfg} from "../../_table/ITableCfg";
import { IAgent } from "./IAgent";
import {AgentSrcCfg} from "./AgentSrcCfg";
import {AgentColDefs} from "./AgentColDefs";

export const AgentTableCfg: ITableCfg<IAgent> = {
    srcCfg: AgentSrcCfg,
    colDefs: AgentColDefs
}