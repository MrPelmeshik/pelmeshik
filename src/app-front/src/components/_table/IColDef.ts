import {TableColumn} from "@consta/table/Table";
import {TableType} from "./TableType";
import {DetailsRender} from "../../types/DetailsRender";
import {ValueValidator} from "../../types/ValueValidator";
import {IFieldId} from "../../types/_baseModel/IFieldId";

export interface IColDef<T extends IFieldId> {
    tableColumn: TableColumn<TableType<T>>;
    detailsRenderer: DetailsRender<T>;
    validators?: ValueValidator<T>[];
    isReadOnly?: boolean;
    defaultValue?: any;
    hidden?: boolean;
}