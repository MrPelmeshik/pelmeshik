import {DataCell} from "@consta/table/DataCell";
import {RenderDefaultCell} from "./RenderDefaultCell";

export const RenderBooleanCell = (value: boolean | null | undefined) => {
    const cell = RenderDefaultCell(value === true
        ? 'Да'
        : value === false
            ? 'Нет'
            : 'Пусто');

    return <DataCell size={'s'}>
        {cell}
    </DataCell>
}