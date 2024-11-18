import {BaseTableSettingsProps} from "./BaseTableSettingsProps";
import css from './BaseTableSettings.module.css';
import { Button } from '@consta/uikit/Button';
import {IconCopy} from "@consta/icons/IconCopy";
import {IconEdit} from "@consta/icons/IconEdit";
import {IconAdd} from "@consta/icons/IconAdd";
import {IconRemove} from "@consta/icons/IconRemove";
import {IconSave} from "@consta/icons/IconSave";
import {Tag} from "@consta/uikit/Tag";

export const BaseTableSettingsComponent = <T,>(props: BaseTableSettingsProps<T>): JSX.Element => {
    return <div className={css.body}>
        <div className={css.leftSide}>
            <Tag label={'Добавлено: 0'}
                 size={'s'}
                 mode={'info'}
            />
            <Tag label={'Изменено: 0'}
                 size={'s'}
                 mode={'info'}
            />
            <Tag label={'Удалено: 0'}
                 size={'s'}
                 mode={'info'}
            />
        </div>
        <div className={css.rightSide}>
            <Button size={'s'}
                    form={'default'}
                    view={'ghost'}
                    iconRight={IconSave}
                    onlyIcon
                    disabled={props.activeItem === null}
            />
            <Button size={'s'}
                    form={'default'}
                    view={'ghost'}
                    iconRight={IconEdit}
                    onlyIcon
            />
            <Button size={'s'}
                    form={'default'}
                    view={'ghost'}
                    iconRight={IconAdd}
                    onlyIcon
            />
            <Button size={'s'}
                    form={'default'}
                    view={'ghost'}
                    iconRight={IconCopy}
                    onlyIcon
                    disabled={props.activeItem === null}
            />
            <Button size={'s'}
                    form={'default'}
                    view={'ghost'}
                    iconRight={IconRemove}
                    onlyIcon
            />
        </div>
    </div>
};