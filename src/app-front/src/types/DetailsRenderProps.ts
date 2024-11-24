import {ValueValidator} from "./ValueValidator";

export interface DetailsRenderProps<T> {
    accessor: keyof T,
    currentRow: T,
    rows: T[],
    validators?: ValueValidator<T>[]
}