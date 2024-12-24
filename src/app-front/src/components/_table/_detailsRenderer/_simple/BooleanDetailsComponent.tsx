import {Checkbox} from "@consta/uikit/Checkbox";
import {IDetailsRenderProps} from "../../../../types/IDetailsRenderProps";

export const BooleanDetailsComponent = <T,>(props: IDetailsRenderProps<T>): JSX.Element => {
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