import {DataCell} from "@consta/table/DataCell";
import {Tag} from "@consta/uikit/Tag";

export const RenderDefaultCell = (value: any) => {
    return <DataCell size={'s'}>
        {value}
    </DataCell>
};