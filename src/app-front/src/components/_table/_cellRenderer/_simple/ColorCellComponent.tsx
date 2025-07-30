import {getInvertColorHex} from "../../../../utility/getInvertColorHex";
import {DataCell} from "@consta/table/DataCell";
import {Tag} from "@consta/uikit/Tag";

export const ColorCellComponent = (value: string): JSX.Element => {
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