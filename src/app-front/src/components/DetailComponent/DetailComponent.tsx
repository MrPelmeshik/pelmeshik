import {DetailProps} from "./DetailProps";
import {Button} from "@consta/uikit/Button";
import {IconClose} from "@consta/icons/IconClose";
import {TableType} from "../../types/TableType";
import css from "./Detail.module.css";
import {Text} from "@consta/uikit/Text";
import {IconSave} from "@consta/icons/IconSave";
import {IconTrash} from "@consta/icons/IconTrash";
import {IconCopy} from "@consta/icons/IconCopy";

export const DetailComponent = <T,>(props: DetailProps<T>): JSX.Element => {
    const body = props.colDefs
        .map(col => props.item[col.accessor as keyof TableType<T>] as string)
        .map(col => <div>{col}</div>);

    return <div className={css.body}>
        <div className={css.whiteBlock}>
            <div className={css.main}>
                <div className={css.header}>
                    <div className={css.leftSide}>
                        <Text size={'l'}
                              weight={'bold'}
                              view={'secondary'}
                        >
                            Test
                        </Text>
                    </div>
                    <div className={css.rightSide}>
                        <Button size={'s'}
                                onClick={props.close}
                                view={'ghost'}
                                iconLeft={IconTrash}
                                onlyIcon
                        />
                        <Button size={'s'}
                                onClick={props.close}
                                view={'ghost'}
                                iconLeft={IconCopy}
                                onlyIcon
                        />
                        <Button size={'s'}
                                onClick={props.close}
                                view={'ghost'}
                                iconLeft={IconSave}
                                onlyIcon
                        />
                        <Button size={'s'}
                                onClick={props.close}
                                view={'ghost'}
                                iconLeft={IconClose}
                                onlyIcon
                        />
                    </div>
                </div>
                <div className={css.content}>
                    {body}
                </div>
            </div>
        </div>
    </div>;
}