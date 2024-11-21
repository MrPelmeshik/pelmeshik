import {TableType} from "../../types/TableType";
import {TableColumn} from "@consta/table/Table";

export interface DetailProps<T> {
    close: () => void;
    item: TableType<T>;
    colDefs: TableColumn<TableType<T>>[];
}