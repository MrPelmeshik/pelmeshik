import axios from "axios";
import {MutableRefObject} from "react";
import {RequestTypeEnum} from "../types/RequestTypeEnum";
import {AreaEnum} from "../types/AreaEnum";
import {ApiRequestProps} from "./ApiRequestProps";


const serverUrl = 'http://localhost:5000';

export const sendApiRequest = async (props: ApiRequestProps) => {
    const areaStr = !props.apiProps.area
        ? ''
        : `/${props.apiProps.area}`;

    const params = props.apiProps.requestType === RequestTypeEnum.GET
        ? {params: props.apiProps.params}
        : {data: props.apiProps.params}

    return await axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Content-Type': 'application/json; charset=utf-8',
            'Referrer-Policy': 'origin-when-cross-origin',
        },
        signal: props.controllerRef?.current.signal,
        ...params,
        method: props.apiProps.requestType,
        url: `${serverUrl}${areaStr}/${props.apiProps.url}`,
    });
}
