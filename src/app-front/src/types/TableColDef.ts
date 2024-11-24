import {TableColumn} from "@consta/table/Table";
import {TableType} from "../components/Table/TableType";
import {DetailsRender} from "./DetailsRender";
import {ValueValidator} from "./ValueValidator";

export interface TableColDef<T> {
    tableColumn: TableColumn<TableType<T>>;
    detailsRenderer: DetailsRender<T>;
    validators?: ValueValidator<T>[];
}