import {TableType} from "../../types/TableType";
import {TableColumn} from "@consta/table/Table";

export interface BaseDetailProps<T> {
    close: () => void;
    item: TableType<T>;
    colDef: TableColumn<TableType<T>>[];
}