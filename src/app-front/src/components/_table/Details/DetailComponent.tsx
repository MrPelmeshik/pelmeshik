import {DetailProps} from "./DetailProps";
import {Button} from "@consta/uikit/Button";
import {IconClose} from "@consta/icons/IconClose";
import css from "./Detail.module.css";
import {Text} from "@consta/uikit/Text";
import {IconSave} from "@consta/icons/IconSave";
import {IconTrash} from "@consta/icons/IconTrash";
import {IconCopy} from "@consta/icons/IconCopy";
import {useApi} from "../../../services/useApi";
import {RequestTypeEnum} from "../../../types/RequestTypeEnum";
import React, {useEffect, useState} from "react";
import {Loader} from "@consta/uikit/Loader";
import {ErrorComponent} from "../../Error/ErrorComponent";

export const DetailComponent = <T, >(props: DetailProps<T>): JSX.Element => {
    const apiResponse = useApi<T>(`${props.catalogType}/getItem`, props.area, RequestTypeEnum.GET, {id: props.id});
    const [item, setItem] = useState<T | null>(null);
    const [body, setBody] = useState<JSX.Element | JSX.Element[] | null>(null);

    useEffect(() => {
        if (apiResponse.error) {
            setBody(<ErrorComponent message={apiResponse.error}/>);
        } else if (apiResponse.data) {
            const lItem = apiResponse.data;
            setBody(props.colDefs
                .map(col => <div key={col.tableColumn.accessor}
                                 className={css.item}
                >
                    <Text size={'s'}
                          view={'secondary'}
                          className={css.itemTitle}
                    >
                        {col.tableColumn.title}
                    </Text>
                    {col.detailsRenderer({
                        accessor: col.tableColumn.accessor as keyof T, // todo: Надо будет исправить
                        currentRow: lItem,
                        rows: [],
                        validators: col.validators
                    })}
                </div>));
            setItem(lItem);
        } else if (!apiResponse.loaded) {
            setBody(<Loader/>)
        } else {
            setBody(null);
        }
    }, [apiResponse.loaded, apiResponse.error, apiResponse.data, props.catalogType]);

    return <div className={css.body}>
        <div className={css.whiteBlock}>
            <div className={css.main}>
                <div className={css.header}>
                    <div className={css.leftSide}>
                        <Text view={'secondary'}
                              size={'l'}
                              weight={'bold'}
                        >
                            {props.title}
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