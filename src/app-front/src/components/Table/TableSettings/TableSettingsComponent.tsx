import {TableSettingsProps} from "./TableSettingsProps";
import css from './TableSettings.module.css';
import {Text} from "@consta/uikit/Text";
import {Tag} from "@consta/uikit/Tag";
import {Button} from "@consta/uikit/Button";
import {IconAdd} from "@consta/icons/IconAdd";
import {Badge} from "@consta/uikit/Badge";

export const TableSettingsComponent = <T,>(props: TableSettingsProps<T>): JSX.Element => {
    return <div className={css.body}>
        <div className={css.leftSide}>
            <Text size={'l'}
                  weight={'bold'}
                  view={'secondary'}
            >
                {props.title}
            </Text>
        </div>
        <div className={css.rightSide}>
            {/*<Badge size={'xs'}
                   view={'stroked'}
                   status={'system'}
                   label={'Кол-во записей с ошибками:'}
            />
                <Tag label={'0'}
                     size={'s'}
                     mode={'info'}
                     style={{marginLeft: '.2rem'}}
                />*/}
            <Button size={'s'}
                    view={'ghost'}
                    iconLeft={IconAdd}
                    onlyIcon
            />
        </div>
    </div>
};