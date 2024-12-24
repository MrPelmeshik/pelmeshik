import {IDetailsRenderProps} from "./IDetailsRenderProps";

export type DetailsRender<T> = (props: IDetailsRenderProps<T>) => React.ReactElement | null;