export type TableType<T> = {
    [P in keyof T]: P extends 'id'
        ? string
        : T[P];
} & {
    id: string;
};