import {DataCell} from "@consta/table/DataCell";
import {DefaultCellComponent} from "./DefaultCellComponent";
import {JSX} from "react";
import {DataCellProps} from "@consta/table/__internal__/src/components/DataCell/DataCell";

export const BooleanCellComponent = (value: boolean | null | undefined): JSX.Element => {
    const cell = DefaultCellComponent(
        value !== undefined && value !== null
            ? value
                ? 'Да'
                : 'Нет'
            : 'Пусто');

    const props: DataCellProps = {
        size: 's'
    };
    return <DataCell {...props}>
        {cell}
    </DataCell>
}