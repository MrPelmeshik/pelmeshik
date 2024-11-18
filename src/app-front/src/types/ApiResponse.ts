export interface ApiResponse<T> {
    cancel: () => void;
    data: T | null;
    error: string | null;
    loaded: boolean;
}