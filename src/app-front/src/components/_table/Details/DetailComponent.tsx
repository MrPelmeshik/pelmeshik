import {DetailProps} from "./DetailProps";
import {Button} from "@consta/uikit/Button";
import {IconClose} from "@consta/icons/IconClose";
import css from "./Detail.module.css";
import {Text} from "@consta/uikit/Text";
import {IconSave} from "@consta/icons/IconSave";
import {IconTrash} from "@consta/icons/IconTrash";
import {IconCopy} from "@consta/icons/IconCopy";
import {RequestTypeEnum} from "../../../types/RequestTypeEnum";
import React, {useEffect, useState} from "react";
import {Loader} from "@consta/uikit/Loader";
import {ErrorComponent} from "../../Error/ErrorComponent";
import {IconRestart} from "@consta/icons/IconRestart";
import {sendApiRequest} from "../../../services/sendApiRequest";
import { Tag } from "@consta/uikit/Tag";
import {SelectItemTypeEnum} from "../SelectItemTypeEnum";

export const DetailComponent = <T, >(props: DetailProps<T>): JSX.Element => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [item, setItem] = useState<T | null>(null);
    const [baseItem, setBaseItem] = useState<T | null>(null);
    const [body, setBody] = useState<JSX.Element | JSX.Element[] | null>(null);
    const [update, setUpdate] = useState<boolean>(false);
    const [hasChanged, setHasChanged] = useState<boolean>(props.selectItem.type === SelectItemTypeEnum.COPY);

    const updateValue = (accessor: keyof T, value: any) => {
        const lItem = {...item} as T;
        lItem[accessor] = value;
        setItem(lItem);
        setUpdate(!update);
    };

    const reset = (accessor: keyof T) => {
        const lItem = {...item} as T;
        lItem[accessor] = (baseItem?.[accessor as keyof T] as any) ?? null;
        setItem(lItem);
        setUpdate(!update);
    }

    const saveItem = () => {
        (async () => {
            try {
                props.selectItem.type === SelectItemTypeEnum.NEW || props.selectItem.type === SelectItemTypeEnum.COPY
                    ? await sendApiRequest({
                        apiProps: {
                            url: `${props.tableSrcCfg.catalogType}/addItem`,
                            requestType: RequestTypeEnum.POST,
                            params: item,
                            area: props.tableSrcCfg.area
                        }
                    })
                    : await sendApiRequest({
                        apiProps: {
                            url: `${props.tableSrcCfg.catalogType}/updateItem`,
                            requestType: RequestTypeEnum.POST,
                            params: item,
                            area: props.tableSrcCfg.area
                        }
                    });
            } catch (error) {
                console.log(error)
            } finally {
                props.close();
            }
        })();
    }

    const deleteItem = () => {
        (async () => {
            try {
                await sendApiRequest({
                    apiProps: {
                        url: `${props.tableSrcCfg.catalogType}/deleteItem`,
                        requestType: RequestTypeEnum.POST,
                        params: {id: props.selectItem.id},
                        area: props.tableSrcCfg.area
                    }
                });
            } catch (error) {
                console.log(error)
            } finally {
                props.close();
            }
        })();
    }

    const copyItem = () => {
        if (props.selectItem.id && props.selectItem.type !== SelectItemTypeEnum.NEW && props.selectItem.type !== SelectItemTypeEnum.COPY) {
            props.close(props.selectItem.id);
        }
    }

    const close = () => {
        props.close();
    }

    useEffect(() => {
        if (props.selectItem.type === SelectItemTypeEnum.NEW) {
            const lItem = {} as T;
            props.colDefs.forEach(colDef => lItem[colDef.tableColumn.accessor as keyof T] = colDef.defaultValue ?? null);
            setData(lItem);
            setBaseItem(lItem)
            setUpdate(!update);
        } else {
            (async () => {
                try {
                    const response = await sendApiRequest({
                        apiProps: {
                            url: `${props.tableSrcCfg.catalogType}/getItem`,
                            requestType: RequestTypeEnum.GET,
                            params: {id: props.selectItem.id},
                            area: props.tableSrcCfg.area
                        }
                    });
                    if (props.selectItem.type === SelectItemTypeEnum.COPY) {
                        props.colDefs.forEach(colDef => {
                            if (colDef.isReadOnly) {
                                delete response.data[colDef.tableColumn.accessor as keyof T];
                            }
                        })
                    }
                    setData(response.data);
                } catch (error) {
                    setError((error as Error).message);
                } finally {
                    setLoaded(true);
                }
            })();
        }
    }, []);

    useEffect(() => {
        let lHasChanged = props.selectItem.type === SelectItemTypeEnum.COPY;
        const lBody = props.colDefs
            .map(col => {
                const valueChanged = item?.[col.tableColumn.accessor as keyof T] !== baseItem?.[col.tableColumn.accessor as keyof T];

                if (valueChanged) {
                    lHasChanged = true;
                }

                return <div key={col.tableColumn.accessor}
                            className={css.item}
                >
                    <div className={css.itemTitle}>
                        <Text size={'s'}
                              view={'secondary'}
                              weight={'bold'}
                        >
                            {col.tableColumn.title}
                        </Text>
                        {
                            !col.isReadOnly && props.selectItem.type !== SelectItemTypeEnum.NEW
                                ? <Button size={'xs'}
                                          view={'clear'}
                                          iconLeft={IconRestart}
                                          onlyIcon
                                          disabled={!valueChanged}
                                          onClick={() => reset(col.tableColumn.accessor as keyof T)}
                                          style={{marginLeft: '.4rem'}}
                                />
                                : null
                        }
                    </div>
                    <div className={css.itemBody}>
                        <col.detailsRenderer accessor={col.tableColumn.accessor as keyof T}
                                             currentRow={item ?? {} as T}
                                             isReadOnly={col.isReadOnly}
                                             updateValue={updateValue}
                        />
                    </div>
                </div>
            });

        setHasChanged(lHasChanged);
        setBody(lBody);
    }, [update]);

    useEffect(() => {
        if (error) {
            setBody(<ErrorComponent message={error}/>);
        } else if (data) {
            const lItem = props.selectItem.type === SelectItemTypeEnum.NEW || props.selectItem.type === SelectItemTypeEnum.COPY
                ? {...data, id: null}
                : data;

            setItem(lItem);
            setBaseItem(lItem);
            setUpdate(!update);
        } else if (!loaded) {
            setBody(<Loader/>)
        } else {
            setBody(null);
        }
    }, [loaded, error, data, props.tableSrcCfg.catalogType]);

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
                        {
                            props.selectItem.type === SelectItemTypeEnum.NEW || props.selectItem.type === SelectItemTypeEnum.COPY
                                ? <Tag size={'xs'}
                                       mode={'info'}
                                       label={'Добавление'}
                                       style={{marginRight: '.4rem'}}
                                />
                                : <Tag size={'xs'}
                                       mode={'info'}
                                       label={'Редактирование'}
                                       style={{marginRight: '.4rem'}}
                                />
                        }
                    </div>
                    <div className={css.rightSide}>
                        <Button size={'s'}
                                onClick={deleteItem}
                                view={'ghost'}
                                iconLeft={IconTrash}
                                onlyIcon
                                disabled={!props.selectItem.id || props.selectItem.type === SelectItemTypeEnum.NEW || props.selectItem.type === SelectItemTypeEnum.COPY}
                                label={'Удалить'}
                        />
                        <Button size={'s'}
                                onClick={copyItem}
                                view={'ghost'}
                                iconLeft={IconCopy}
                                onlyIcon
                                disabled={!props.selectItem.id || props.selectItem.type === SelectItemTypeEnum.NEW || props.selectItem.type === SelectItemTypeEnum.COPY}
                                label={'Скопировать'}
                        />
                        <Button size={'s'}
                                onClick={saveItem}
                                view={'ghost'}
                                iconLeft={IconSave}
                                onlyIcon
                                disabled={!hasChanged}
                                label={'Сохранить'}
                        />
                        <Button size={'s'}
                                onClick={close}
                                view={'ghost'}
                                iconLeft={IconClose}
                                onlyIcon
                                label={'Закрыть'}
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