import {DataCell} from "@consta/table/DataCell";
import {JSX} from "react";
import {DataCellProps} from "@consta/table/__internal__/src/components/DataCell/DataCell";

export const DefaultCellComponent = (value: any): JSX.Element => {
    const props: DataCellProps = {
        size: 's'
    };
    return <DataCell {...props}>
        {value}
    </DataCell>
};