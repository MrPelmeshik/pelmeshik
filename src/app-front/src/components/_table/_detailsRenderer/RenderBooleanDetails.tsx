import {DetailsRenderProps} from "../../../types/DetailsRenderProps";
import {Checkbox} from "@consta/uikit/Checkbox";

export const RenderBooleanDetails = <T,>(props: DetailsRenderProps<T>): JSX.Element => {
    return <div style={{width: '100%'}}>
        <Checkbox checked={props.currentRow[props.accessor] as boolean}
                  size={'s'}
                  disabled={!!props.isReadOnly}
        />
    </div>;
}