import {DetailsRenderProps} from "../../../../types/DetailsRenderProps";
import {Checkbox} from "@consta/uikit/Checkbox";

export const BooleanDetailsComponent = <T,>(props: DetailsRenderProps<T>): JSX.Element => {
    return <div style={{width: '100%'}}>
        <Checkbox checked={props.currentRow[props.accessor] as boolean}
                  intermediate={props.currentRow[props.accessor] === undefined || props.currentRow[props.accessor] === null}
                  size={'s'}
                  disabled={!!props.isReadOnly}
                  view={'ghost'}
                  onChange={(value) => {
                      const v = props.currentRow[props.accessor] === undefined || props.currentRow[props.accessor] === null
                        ? true
                          : !!props.currentRow[props.accessor]
                            ? false
                              : null;
                      props.updateValue?.(props.accessor, v)
                  }}
        />
    </div>;
}