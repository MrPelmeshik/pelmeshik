import React, {useState} from "react";
import { TextField } from '@consta/uikit/TextField';
import {DataCell} from "@consta/table/DataCell";

export const RenderTextCell = (value: string) => {
    const [newValue, setNewValue] = useState<string | null>(value);

    return <DataCell size={'s'}
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