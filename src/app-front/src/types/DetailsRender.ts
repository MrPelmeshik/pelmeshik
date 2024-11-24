import {DetailsRenderProps} from "./DetailsRenderProps";

export type DetailsRender<T> = (props: DetailsRenderProps<T>) => React.ReactElement | null;