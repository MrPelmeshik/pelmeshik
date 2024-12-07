import {ICard} from "./ICard";
import {RenderDefaultHeader} from "../../_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_table/_cellRenderer/RenderDefaultCell";
import {TableColDef} from "../../_table/TableColDef";
import {RenderDefaultDetails} from "../../_table/_detailsRenderer/RenderDefaultDetails";
import {RenderNumberDetails} from "../../_table/_detailsRenderer/RenderNumberDetails";
import { RenderBooleanCell } from "../../_table/_cellRenderer/RenderBooleanCell";
import { RenderBooleanDetails } from "../../_table/_detailsRenderer/RenderBooleanDetails";
import {RenderDateTimeCell} from "../../_table/_cellRenderer/RenderDateTimeCell";
import {RenderDateTimeDetails} from "../../_table/_detailsRenderer/RenderDateTimeDetails";

export const CardColDefs: TableColDef<ICard>[] = [
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
            title: 'Короткое название',
            accessor: 'shortName',
            width: '1fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.shortName),
        },
        detailsRenderer: RenderDefaultDetails,
    },
    {
        tableColumn: {
            title: 'Полное название',
            accessor: 'fullName',
            width: '3fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.fullName),
        },
        detailsRenderer: RenderDefaultDetails,
    },
    {
        tableColumn: {
            title: 'Дата обновления',
            accessor: 'updateDate',
            width: '2fr',
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
