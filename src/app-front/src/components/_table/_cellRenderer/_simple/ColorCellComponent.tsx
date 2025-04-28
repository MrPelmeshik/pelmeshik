import {DataCell} from "@consta/table/DataCell";
import {ColorTagComponent} from "../../../_common/ColorTag/ColorTagComponent";
import {JSX} from "react";
import {DataCellProps} from "@consta/table/__internal__/src/components/DataCell/DataCell";

export const ColorCellComponent = (value: string): JSX.Element => {
    const props: DataCellProps = {
        size: 's'
    };
    return <DataCell {...props}>
        <ColorTagComponent color={value}
                           value={value}
        />
    </DataCell>
}