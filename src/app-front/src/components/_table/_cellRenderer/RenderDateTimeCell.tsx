import {DataCell} from "@consta/table/DataCell";
import {DatePicker} from "@consta/uikit/DatePicker";

export const RenderDateTimeCell = (value: Date | null | undefined): JSX.Element => {
    return <DataCell size={'s'}>
        <DatePicker size={'s'}
                    view={'clear'}
                    type={'date-time'}
                    value={value && new Date(value)}
                    placeholder={''}
        />
    </DataCell>
}