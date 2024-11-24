import {TableProps} from "./TableProps";
import React, {useEffect, useState} from "react";
import css from './Table.module.css';
import {TableType} from "../TableType";
import {Loader} from '@consta/uikit/Loader';
import {Table} from "@consta/table/Table";
import {useApi} from "../../../services/useApi";
import {RequestTypeEnum} from "../../../types/RequestTypeEnum";
import {AreaEnum} from "../../../types/AreaEnum";
import {DetailComponent} from "../Details/DetailComponent";
import {TableSettingsComponent} from "../TableSettings/TableSettingsComponent";
import {ErrorComponent} from "../../Error/ErrorComponent";


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
            ? <DetailComponent title={props.title}
                               close={closeDetail}
                               id={activeItem.id}
                               area={AreaEnum.FINANCE} // todo: Надо будет добавить опредеение в зависимости от типа каталога
                               catalogType={props.catalogType}
                               colDefs={props.colDefs}
            />
            : null);
    }, [activeItem]);

    useEffect(() => {
        let body: JSX.Element | null = null;
        if (apiResponse.error) {
            body = <ErrorComponent message={apiResponse.error} />;
        } else if (!apiResponse.loaded) {
            body = <Loader/>;
        }

        if (body) {
            setTableTableOverflowWidow(
                <div className={css.overflowWidow}>
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
                <TableSettingsComponent title={props.title} />
            </div>
            <div className={css.tableMain}>
                <Table rows={((apiResponse.data) as TableType<T>[]) ?? []}
                       columns={props.colDefs.map(colDef => colDef.tableColumn)}
                       stickyHeader
                       zebraStriped
                       resizable={'inside'}
                       virtualScroll={!!apiResponse.data && apiResponse.data.length > 0}
                       onRowClick={(item) => setActiveItem(item)}
                />
            </div>
        </div>
    </div>
}