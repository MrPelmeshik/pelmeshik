import {DetailsRenderProps} from "../../../types/DetailsRenderProps";
import {useState} from "react";
import {TextField} from "@consta/uikit/TextField";

export const RenderNumberDetails = <T,>(props: DetailsRenderProps<T>): JSX.Element => {
    const [newValue, setNewValue] = useState<string | null>(props.currentRow[props.accessor] as string);
    const style = !props.isReadOnly
        ? {borderBottom: ' var(--control-border-width) solid var(--color-control-bg-border-default)'}
        : {};

    return <TextField withClearButton
                      value={newValue}
                      onChange={setNewValue}
                      size={'s'}
                      disabled={!!props.isReadOnly}
                      view={'clear'}
                      type={'number'}
                      style={style}
    />;
}