import {DetailsRenderProps} from "../../../types/DetailsRenderProps";
import {Text} from "@consta/uikit/Text";
import {Checkbox} from "@consta/uikit/Checkbox";

export const RenderBooleanDetails = <T,>(props: DetailsRenderProps<T>): JSX.Element => {
    return <Text size={'s'}>
        <Checkbox checked={props.currentRow[props.accessor] as boolean}
                  size={'s'}
                  disabled={!!props.isReadOnly}
        />
    </Text>;
}