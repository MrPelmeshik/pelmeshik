import {DataCell} from "@consta/table/DataCell";
import {DefaultCellComponent} from "./DefaultCellComponent";

export const BooleanCellComponent = (value: boolean | null | undefined): JSX.Element => {
    const cell = DefaultCellComponent(value === true
        ? 'Да'
        : value === false
            ? 'Нет'
            : 'Пусто');

    return <DataCell size={'s'}>
        {cell}
    </DataCell>
}