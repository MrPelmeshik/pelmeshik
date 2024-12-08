import {DataCell} from "@consta/table/DataCell";
import {Text} from "@consta/uikit/Text";

export const DateTimeCellComponent = (value: Date | null | undefined): JSX.Element => {
    const date = value && new Date(value);
    return <DataCell size={'s'}>
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