import {BaseTableProps} from "./BaseTableProps";
import React, {useEffect, useState} from "react";
import css from './BaseTable.module.css';
import {TableType} from "../../types/TableType";
import {Loader} from '@consta/uikit/Loader';
import {Text} from "@consta/uikit/Text";
import {Table} from "@consta/table/Table";
import {useApi} from "../../services/useApi";
import {RequestTypeEnum} from "../../types/RequestTypeEnum";
import {BaseTableSettingsComponent} from "../BaseTableSettings/BaseTableSettingsComponent";
import {AreaEnum} from "../../types/AreaEnum";
import {Modal} from "@consta/uikit/Modal";
import {TestBlockComponent} from "../TestBlock/TestBlockComponent";
import {BaseDetailComponent} from "../BaseDetailComponent/BaseDetailComponent";


export const BaseTableComponent = <T, >(props: BaseTableProps<T>): JSX.Element => {
    const apiResponse = useApi<T[]>(
        `${props.catalogType}/getItems`,
        AreaEnum.FINANCE, // todo: Надо будет добавить опредеение в зависимости от типа каталога
        RequestTypeEnum.GET,
        {}
    );
    const [tableOverflowWidow, setTableTableOverflowWidow] = useState<JSX.Element | null>(null);
    const [activeItem, setActiveItem] = useState<TableType<T> | null>(null);
    const [detail, setDetail] = useState<JSX.Element | null>(null);

    const closeDetail = () => {
        setDetail(null);
        setActiveItem(null);
    };

    useEffect(() => {
        setDetail(activeItem !== null
            ? <BaseDetailComponent close={closeDetail} item={activeItem} colDef={props.colDef} />
            : null);
    }, [activeItem]);

    useEffect(() => {
        let body: JSX.Element | null = null;
        if (apiResponse.error) {
            body = <Text view={'alert'}
                         size={'s'}
            >
                <Text weight={'bold'}
                      transform={'uppercase'}
                >
                    Ошибка
                </Text>
                <Text>
                    {apiResponse.error}
                </Text>
            </Text>;
        } else if (!apiResponse.loaded) {
            body = <Loader/>;
        }

        if (body) {
            setTableTableOverflowWidow(
                <div className={css.overflowWidow}
                     style={{
                         visibility: !!detail ? 'hidden' : 'visible',
                     }}
                >
                    {body}
                </div>);
        } else {
            setTableTableOverflowWidow(null);
        }

    }, [apiResponse.loaded, apiResponse.error, apiResponse.data, props.catalogType]);

    return <div className={css.body}>
        {detail}
        {tableOverflowWidow}
        <Table rows={((apiResponse.data) as TableType<T>[]) ?? []}
               columns={props.colDef}
               stickyHeader
               zebraStriped
               resizable={'outside'}
               virtualScroll={!!apiResponse.data && apiResponse.data.length > 0}
               onRowClick={(item) => setActiveItem(item)}
               style={{
                   visibility: !!detail ? 'hidden' : 'visible',
               }}
        />
    </div>
}