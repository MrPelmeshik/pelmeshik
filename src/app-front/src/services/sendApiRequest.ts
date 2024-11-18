import axios from "axios";
import {MutableRefObject} from "react";
import {RequestTypeEnum} from "../types/RequestTypeEnum";
import {AreaEnum} from "../types/AreaEnum";


const serverUrl = 'http://localhost:5000';

export const sendApiRequest = async (endpoint: string,
                                     area: AreaEnum,
                                     requestType: RequestTypeEnum,
                                     params: any,
                                     controllerRef: MutableRefObject<AbortController> | null = null) => {
    return await axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            'Content-Type': 'application/json; charset=utf-8',
            'Referrer-Policy': 'origin-when-cross-origin',
        },
        signal: controllerRef?.current.signal,
        data: params,
        method: requestType,
        url: `${serverUrl}/${area}/${endpoint}`,
    });
}
