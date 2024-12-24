import {DataCell} from "@consta/table/DataCell";
import {ColorTagComponent} from "../../../_common/ColorTag/ColorTagComponent";

export const ColorCellComponent = (value: string): JSX.Element => {
    return <DataCell size={'s'}>
        <ColorTagComponent color={value}
                           value={value}
        />
    </DataCell>
}