import {TextField} from "@consta/uikit/TextField";
import {IDetailsRenderProps} from "../../../../types/IDetailsRenderProps";

export const DefaultDetailsComponent = <T,>(props: IDetailsRenderProps<T>): JSX.Element => {
    const style = !props.isReadOnly
        ? {borderBottom: ' var(--control-border-width) solid var(--color-control-bg-border-default)'}
        : {};

    return <TextField withClearButton
                      value={props.currentRow[props.accessor] as string}
                      onChange={(value) => props.updateValue?.(props.accessor, value)}
                      size={'s'}
                      disabled={!!props.isReadOnly}
                      view={'clear'}
                      type={'text'}
                      style={style}
    />;
}