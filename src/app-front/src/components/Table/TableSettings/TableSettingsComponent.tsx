import {TableSettingsProps} from "./TableSettingsProps";
import css from './TableSettings.module.css';
import {Text} from "@consta/uikit/Text";
import {Tag} from "@consta/uikit/Tag";
import {Button} from "@consta/uikit/Button";
import {IconAdd} from "@consta/icons/IconAdd";

export const TableSettingsComponent = <T,>(props: TableSettingsProps<T>): JSX.Element => {
    return <div className={css.body}>
        <div className={css.leftSide}>
            <Text size={'l'}
                  weight={'bold'}
                  view={'secondary'}
            >
                Test
            </Text>
        </div>
        <div className={css.rightSide}>
            {/*<Text size={'m'}>
                test:
                <Tag label={'0'}
                     size={'s'}
                     mode={'info'}
                />
            </Text>*/}
            <Button size={'s'}
                    view={'ghost'}
                    iconLeft={IconAdd}
                    onlyIcon
            />
        </div>
    </div>
};