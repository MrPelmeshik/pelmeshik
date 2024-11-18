import {TableType} from "../../types/TableType";

export interface BaseTableSettingsProps<T> {
    activeItem: TableType<T> | null;
}