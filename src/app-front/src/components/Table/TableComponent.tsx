import {TableProps} from "./TableProps";
import React, {useEffect, useState} from "react";
import css from './Table.module.css';
import {TableType} from "../../types/TableType";
import {Loader} from '@consta/uikit/Loader';
import {Text} from "@consta/uikit/Text";
import {Table} from "@consta/table/Table";
import {useApi} from "../../services/useApi";
import {RequestTypeEnum} from "../../types/RequestTypeEnum";
import {AreaEnum} from "../../types/AreaEnum";
import {DetailComponent} from "../DetailComponent/DetailComponent";
import {TableSettingsComponent} from "./TableSettings/TableSettingsComponent";


export const TableComponent = <T, >(props: TableProps<T>): JSX.Element => {
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
            ? <DetailComponent close={closeDetail}
                               item={activeItem}
                               colDefs={props.colDefs}
            />
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
                         // visibility: !!detail ? 'hidden' : 'visible',
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
        <div className={css.main}>
            <div className={css.tableSettings}>
                <TableSettingsComponent />
            </div>
            <div className={css.tableMain}>
                <Table rows={((apiResponse.data) as TableType<T>[]) ?? []}
                       columns={props.colDefs}
                       stickyHeader
                       zebraStriped
                       resizable={'outside'}
                       virtualScroll={!!apiResponse.data && apiResponse.data.length > 0}
                       onRowClick={(item) => setActiveItem(item)}
                />
            </div>
        </div>
    </div>
}