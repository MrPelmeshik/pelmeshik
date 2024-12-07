import {ITag} from "./ITag";
import {RenderColorCell} from "../../_table/_cellRenderer/RenderColorCell";
import {RenderDefaultHeader} from "../../_table/_headerRenderer/RenderDefaultHeader";
import {TableColDef} from "../../_table/TableColDef";
import {RenderDefaultDetails} from "../../_table/_detailsRenderer/RenderDefaultDetails";
import {RenderDefaultCell} from "../../_table/_cellRenderer/RenderDefaultCell";
import {RenderNumberDetails} from "../../_table/_detailsRenderer/RenderNumberDetails";
import {RenderColorDetails} from "../../_table/_detailsRenderer/RenderColorDetails";
import { RenderBooleanCell } from "../../_table/_cellRenderer/RenderBooleanCell";
import { RenderBooleanDetails } from "../../_table/_detailsRenderer/RenderBooleanDetails";
import {RenderDateTimeCell} from "../../_table/_cellRenderer/RenderDateTimeCell";
import {RenderDateTimeDetails} from "../../_table/_detailsRenderer/RenderDateTimeDetails";

export const TagColDefs: TableColDef<ITag>[] = [
    {
        tableColumn: {
            title: 'ID',
            accessor: 'id',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.id),
        },
        detailsRenderer: RenderNumberDetails,
        isReadOnly: true,
    },
    {
        tableColumn: {
            title: 'Название',
            accessor: 'name',
            width: '2fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.name),
        },
        detailsRenderer: RenderDefaultDetails,
    },
    {
        tableColumn: {
            title: 'Цвет',
            accessor: 'color',
            width: '1fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderColorCell(props.row.color),
        },
        detailsRenderer: RenderColorDetails,
        defaultValue: '#000000',
    },
    {
        tableColumn: {
            title: 'Дата обновления',
            accessor: 'updateDate',
            width: '1fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDateTimeCell(props.row.updateDate),
        },
        detailsRenderer: RenderDateTimeDetails,
        isReadOnly: true,
    },
    {
        tableColumn: {
            title: 'Признак активности',
            accessor: 'isActive',
            width: '1fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderBooleanCell(props.row.isActive)
        },
        detailsRenderer: RenderBooleanDetails
    }
];