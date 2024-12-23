import {MutableRefObject} from "react";
import {ApiProps} from "./ApiProps";

export interface ApiRequestProps {
    apiProps: ApiProps;
    controllerRef?: MutableRefObject<AbortController>;
}