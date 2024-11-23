import axios from "axios";
import {MutableRefObject} from "react";
import {RequestTypeEnum} from "../types/RequestTypeEnum";
import {AreaEnum} from "../types/AreaEnum";


const serverUrl = 'http://localhost:5000';

export const sendApiRequest = async (endpoint: string,
                                     requestType: RequestTypeEnum,
                                     params: any,
                                     area: AreaEnum = AreaEnum.EMPTY,
                                     controllerRef: MutableRefObject<AbortController> | null = null) => {
    const areaStr = area === AreaEnum.EMPTY
        ? ''
        : `/${area}`;

    return await axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Content-Type': 'application/json; charset=utf-8',
            'Referrer-Policy': 'origin-when-cross-origin',
        },
        signal: controllerRef?.current.signal,
        params: params,
        method: requestType,
        url: `${serverUrl}${areaStr}/${endpoint}`,
    });
}
