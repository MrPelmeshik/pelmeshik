import {ITag} from "./ITag";
import {RenderColorCell} from "../../_table/_cellRenderer/RenderColorCell";
import {RenderTextCell} from "../../_table/_cellRenderer/RenderTextCell";
import {RenderDefaultHeader} from "../../_table/_headerRenderer/RenderDefaultHeader";
import {TableColDef} from "../../_table/TableColDef";
import {RenderDefaultDetails} from "../../_table/_detailsRenderer/RenderDefaultDetails";
import {RenderDefaultCell} from "../../_table/_cellRenderer/RenderDefaultCell";

export const TagColDefs: TableColDef<ITag>[] = [
    {
        tableColumn: {
            title: 'ID',
            accessor: 'id',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.id),
        },
        detailsRenderer: RenderDefaultDetails,
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
        detailsRenderer: RenderDefaultDetails,
    },
];