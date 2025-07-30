import {ICategory} from "./ICategory";
import {RenderColorCell} from "../../_table/_cellRenderer/RenderColorCell";
import {RenderDefaultHeader} from "../../_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_table/_cellRenderer/RenderDefaultCell";
import {TableColDef} from "../../_table/TableColDef";
import {RenderDefaultDetails} from "../../_table/_detailsRenderer/RenderDefaultDetails";
import {RenderNumberDetails} from "../../_table/_detailsRenderer/RenderNumberDetails";
import {RenderColorDetails} from "../../_table/_detailsRenderer/RenderColorDetails";

export const CategoryColDefs: TableColDef<ICategory>[] = [
    {
        tableColumn: {
            title: 'ID',
            accessor: 'id',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.id),
        },
        detailsRenderer: RenderNumberDetails,
        isReadOnly: true
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
    },
];