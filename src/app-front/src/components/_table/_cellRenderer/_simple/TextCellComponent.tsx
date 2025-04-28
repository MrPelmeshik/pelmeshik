import React, {JSX, useState} from "react";
import { TextField } from '@consta/uikit/TextField';
import {DataCell} from "@consta/table/DataCell";
import {DataCellProps} from "@consta/table/__internal__/src/components/DataCell/DataCell";

export const TextCellComponent = (value: string): JSX.Element => {
    const [newValue, setNewValue] = useState<string | null>(value);
    const props: DataCellProps = {
        size: 's'
    };
    return <DataCell {...props}
                     style={{
                         display: 'flex',
                         flex: '1',
                         alignItems: 'center',
                         justifyContent: 'center',
                     }}>
        <TextField withClearButton
                   value={newValue}
                   onChange={setNewValue}
                   size={'s'}
        />
    </DataCell>
}