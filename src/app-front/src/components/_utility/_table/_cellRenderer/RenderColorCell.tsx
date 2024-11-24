import {getInvertColorHex} from "../getInvertColorHex";
import {DataCell} from "@consta/table/DataCell";
import {Tag} from "@consta/uikit/Tag";

export const RenderColorCell = (value: string): JSX.Element => {
    const invertColor = getInvertColorHex(value);

    return <DataCell size={'s'}>
        <Tag size={'s'}
             style={{
                 backgroundColor: value,
                 color: invertColor,
             }}
             mode={'info'}
             label={value}
        />
    </DataCell>
}