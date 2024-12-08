import {DataCell} from "@consta/table/DataCell";
import {Tag} from "@consta/uikit/Tag";

export const DefaultCellComponent = (value: any): JSX.Element => {
    return <DataCell size={'s'}>
        {value}
    </DataCell>
};