export interface IDetailsRenderProps<T> {
    accessor: keyof T,
    currentRow: T,
    isReadOnly?: boolean,
    updateValue?: (accessor: keyof T, value: any) => void
}