import {TableType} from "../../../types/TableType";
import {ITag} from "./ITag";
import {TableColumn} from '@consta/table/Table';
import {RenderColorCell} from "../../_utility/_table/_cellRenderer/RenderColorCell";
import {RenderTextCell} from "../../_utility/_table/_cellRenderer/RenderTextCell";
import {RenderDefaultHeader} from "../../_utility/_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_utility/_table/_cellRenderer/RenderDefaultCell";

export const TagColDef: TableColumn<TableType<ITag>>[] = [
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