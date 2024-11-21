import {TableColumn} from "@consta/table/Table";
import {TableType} from "../../../types/TableType";
import {ICategory} from "./ICategory";
import {RenderColorCell} from "../../_utility/_table/_cellRenderer/RenderColorCell";
import {RenderTextCell} from "../../_utility/_table/_cellRenderer/RenderTextCell";
import {RenderDefaultHeader} from "../../_utility/_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_utility/_table/_cellRenderer/RenderDefaultCell";

export const CategoryColDefs: TableColumn<TableType<ICategory>>[] = [
    {
        title: 'ID',
        accessor: 'id',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.id),
    },
    {
        title: 'Название',
        accessor: 'name',
        width: '2fr',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.name),
    },
    {
        title: 'Цвет',
        accessor: 'color',
        width: '1fr',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderColorCell(props.row.color),
    },
];