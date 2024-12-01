import {DetailsRenderProps} from "../../../types/DetailsRenderProps";
import {Text} from "@consta/uikit/Text";
import {useState} from "react";
import {TextField} from "@consta/uikit/TextField";

export const RenderNumberDetails = <T,>(props: DetailsRenderProps<T>): JSX.Element => {
    const [newValue, setNewValue] = useState<string | null>(props.currentRow[props.accessor] as string);

    return <Text size={'s'}>
        <TextField withClearButton
                   value={newValue}
                   onChange={setNewValue}
                   size={'s'}
                   disabled={!!props.isReadOnly}
                   view={'clear'}
                   type={'number'}
        />
    </Text>;
}