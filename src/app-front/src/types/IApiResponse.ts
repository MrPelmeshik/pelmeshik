export interface IApiResponse<T> {
    cancel: () => void;
    data: T | null;
    error: string | null;
    loaded: boolean;
    doUpdate: () => void;
}