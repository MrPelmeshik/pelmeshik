import {DatePicker} from "@consta/uikit/DatePicker";
import {IDetailsRenderProps} from "../../../../types/IDetailsRenderProps";
import {JSX} from "react";

export const DateTimeDetailsComponent = <T, >(props: IDetailsRenderProps<T>): JSX.Element => {
    const value = props.currentRow[props.accessor] as Date | null | undefined;
    const style = !props.isReadOnly
        ? {
            borderBottom: ' var(--control-border-width) solid var(--color-control-bg-border-default)',
            zIndex: 14
        }
        : {};

    return <div style={{width: '100%'}}>
        <DatePicker size={'s'}
                    view={'clear'}
                    type={'date-time'}
                    value={value && new Date(value)}
                    onChange={(item) => props.updateValue?.(props.accessor, item)}
                    disabled={props.isReadOnly}
                    placeholder={''}
                    style={style}
        />
    </div>;
}