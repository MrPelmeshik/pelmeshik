import {TableColumn} from "@consta/table/Table";
import {TableType} from "./TableType";
import {DetailsRender} from "../../types/DetailsRender";
import {ValueValidator} from "../../types/ValueValidator";

export interface TableColDef<T> {
    tableColumn: TableColumn<TableType<T>>;
    detailsRenderer: DetailsRender<T>;
    validators?: ValueValidator<T>[];
}