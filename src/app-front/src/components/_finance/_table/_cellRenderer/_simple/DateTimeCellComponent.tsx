import {DataCell} from "@consta/table/DataCell";
import {Text} from "@consta/uikit/Text";
import {JSX} from "react";
import {DataCellProps} from "@consta/table/__internal__/src/components/DataCell/DataCell";

export const DateTimeCellComponent = (value: Date | null | undefined): JSX.Element => {
    const date = value && new Date(value);

    const props: DataCellProps = {
        size: 's'
    };
    return <DataCell {...props}>
        <Text size={'s'}>
            {date && date.toLocaleDateString('ru-RU')}
        </Text>
        <Text size={'xs'}
              view={'ghost'}
        >
            {date && date.toLocaleTimeString('ru-RU')}
        </Text>
    </DataCell>
}