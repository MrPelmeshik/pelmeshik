import {useEffect, useRef, useState} from "react";
import {ApiResponse} from "../types/ApiResponse";
import {RequestTypeEnum} from "../types/RequestTypeEnum";
import {sendApiRequest} from "./sendApiRequest";
import {AreaEnum} from "../types/AreaEnum";

export const useApi = <T>(endpoint: string, area: AreaEnum, requestType: RequestTypeEnum, params: any): ApiResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const controllerRef = useRef(new AbortController());
    const cancel = () => {
        controllerRef.current.abort();
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await sendApiRequest(endpoint, requestType, params, area, controllerRef);
                setData(response.data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoaded(true);
            }
        })();
    }, []);

    return { cancel, data, error, loaded };
};
