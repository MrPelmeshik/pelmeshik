import {useEffect, useRef, useState} from "react";
import {ApiResponse} from "../types/ApiResponse";
import {sendApiRequest} from "./sendApiRequest";
import {ApiProps} from "./ApiProps";

export const useApi = <T>(props: ApiProps): ApiResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const controllerRef = useRef(new AbortController());
    const [update, setUpdate] = useState<boolean>(false);
    const cancel = () => {
        controllerRef.current.abort();
    };

    const doUpdate = () => setUpdate(!update);

    useEffect(() => {
        (async () => {
            try {
                const response = await sendApiRequest({apiProps: props, controllerRef});
                setData(response.data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoaded(true);
            }
        })();
    }, [undefined, update]);

    return { cancel, data, error, loaded, doUpdate };
};
