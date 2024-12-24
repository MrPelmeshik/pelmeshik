import {TableProps} from "./TableProps";
import React, {useEffect, useState} from "react";
import css from './Table.module.css';
import {TableType} from "../TableType";
import {Loader} from '@consta/uikit/Loader';
import {Table} from "@consta/table/Table";
import {useApi} from "../../../services/useApi";
import {RequestTypeEnum} from "../../../types/RequestTypeEnum";
import {DetailComponent} from "../Details/DetailComponent";
import {TableSettingsComponent} from "../TableSettings/TableSettingsComponent";
import {ErrorComponent} from "../../Error/ErrorComponent";
import {ISelectItem} from "./ISelectItem";
import {SelectItemTypeEnum} from "../SelectItemTypeEnum";
import {IFieldId} from "../../../types/_baseModel/IFieldId";


export const TableComponent = <T extends IFieldId, >(props: TableProps<T>): JSX.Element => {
    const apiResponse = useApi<T[]>({
        url: `${props.tableCfg.srcCfg.catalogType}/getItems`,
        area: props.tableCfg.srcCfg.area,
        requestType: RequestTypeEnum.GET,
        params: {}
    });
    const [tableOverflowWidow, setTableTableOverflowWidow] = useState<JSX.Element | null>(null);
    const [selectItem, setSelectItem] = useState<ISelectItem | null>(null);
    const [detail, setDetail] = useState<JSX.Element | null>(null);

    const closeDetail = (copyId?: number | string) => {
        setDetail(null);
        setSelectItem(null);
        apiResponse.doUpdate();

        if (copyId) {
            setSelectItem({
                id: copyId,
                type: SelectItemTypeEnum.COPY
            });
        }
    };

    const addItem = () => {
        setSelectItem({
            id: undefined,
            type: SelectItemTypeEnum.NEW
        });
    };

    useEffect(() => {
        setDetail(selectItem !== null
            ? <DetailComponent title={props.title}
                               selectItem={selectItem}
                               close={closeDetail}
                               tableSrcCfg={props.tableCfg.srcCfg}
                               colDefs={props.tableCfg.colDefs}
            />
            : null);
    }, [selectItem]);

    useEffect(() => {
        let body: JSX.Element | null = null;
        if (apiResponse.error) {
            body = <ErrorComponent message={apiResponse.error}/>;
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

    }, [apiResponse.loaded, apiResponse.error, apiResponse.data, props.tableCfg.srcCfg.catalogType]);

    return <div className={css.body}>
        {detail}
        {tableOverflowWidow}
        <div className={css.main}>
            <div className={css.tableSettings}>
                <TableSettingsComponent title={props.title}
                                        addItem={addItem}
                />
            </div>
            <div className={css.tableMain}>
                <Table rows={((apiResponse.data) as TableType<T>[]) ?? []}
                       columns={
                           props
                               .tableCfg
                               .colDefs
                               .filter(colDef => !colDef.hidden)
                               .map(colDef => colDef.tableColumn)
                       }
                       style={{
                           maxHeight: 'calc(85vh - 2rem)' // todo: Надо будет как-то иначе ограничивать размер таблицы (для того чтобы скролл работал)
                       }}
                       stickyHeader
                       zebraStriped
                       onRowClick={(item) => setSelectItem({id: item.id, type: SelectItemTypeEnum.SELECT})}
                />
            </div>
        </div>
    </div>
}