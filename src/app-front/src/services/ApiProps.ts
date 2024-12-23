import {AreaEnum} from "../types/AreaEnum";
import {RequestTypeEnum} from "../types/RequestTypeEnum";

export interface ApiProps {
    url: string;
    area: AreaEnum;
    requestType: RequestTypeEnum;
    params: any;
}