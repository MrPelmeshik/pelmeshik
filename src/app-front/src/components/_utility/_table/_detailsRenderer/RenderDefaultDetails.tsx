import {DetailsRenderProps} from "../../../../types/DetailsRenderProps";
import {Text} from "@consta/uikit/Text";

export const RenderDefaultDetails = <T,>(props: DetailsRenderProps<T>): JSX.Element => {
    const value = props.currentRow[props.accessor] as string;
    return <Text size={'s'}>
        {value}
    </Text>;
}