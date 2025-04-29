import {TagProps} from "./TagProps";
import {Badge} from "@consta/uikit/Badge";
import {JSX} from "react";

export const TagComponent = (props: TagProps): JSX.Element => {
    return <Badge size={props.size}
                  minified={props.minified}
                  status={'normal'}
                  label={props.data.name}
                  style={{
                      color: props.data.color,
                      border: 'var(--control-border-width) solid ' + props.data.color,
                      backgroundColor: undefined
                  }}
    />;
}