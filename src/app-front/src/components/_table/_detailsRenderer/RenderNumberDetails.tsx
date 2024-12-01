import {DetailsRenderProps} from "../../../types/DetailsRenderProps";
import {TextField} from "@consta/uikit/TextField";

export const RenderNumberDetails = <T,>(props: DetailsRenderProps<T>): JSX.Element => {
    const style = !props.isReadOnly
        ? {borderBottom: ' var(--control-border-width) solid var(--color-control-bg-border-default)'}
        : {};

    return <TextField withClearButton
                      value={props.currentRow[props.accessor] as string}
                      onChange={(value) => props.updateValue?.(props.accessor, value)}
                      size={'s'}
                      disabled={!!props.isReadOnly}
                      view={'clear'}
                      type={'number'}
                      style={style}
    />;
}