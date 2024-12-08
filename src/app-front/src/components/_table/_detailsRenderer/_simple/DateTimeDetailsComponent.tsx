import {DetailsRenderProps} from "../../../../types/DetailsRenderProps";
import {DatePicker} from "@consta/uikit/DatePicker";

export const DateTimeDetailsComponent = <T,>(props: DetailsRenderProps<T>): JSX.Element => {
    const value = props.currentRow[props.accessor] as Date | null | undefined;

    return <div style={{width: '100%'}}>
        <DatePicker size={'s'}
                    view={'clear'}
                    type={'date-time'}
                    value={value && new Date(value)}
                    onChange={(item) => props.updateValue?.(props.accessor, item)}
                    disabled={props.isReadOnly}
                    placeholder={''}
                    style={{
                        zIndex: 14 // todo: Надо будет как-то поправить. Пока у модалки zIndex = 13
                    }}
        />
    </div>;
}