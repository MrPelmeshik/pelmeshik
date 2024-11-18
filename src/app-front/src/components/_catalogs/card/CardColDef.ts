import {TableColumn} from "@consta/table/Table";
import {TableType} from "../../../types/TableType";
import {ICard} from "./ICard";
import {RenderDefaultHeader} from "../../_utility/_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_utility/_table/_cellRenderer/RenderDefaultCell";


export const CardColDef: TableColumn<TableType<ICard>>[] = [
    {
        title: 'ID',
        accessor: 'id',
        width: 'auto',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.id),
    },
    {
        title: 'Название',
        accessor: 'name',
        width: 'auto',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.name),
    },
    {
        title: 'Короткое название',
        accessor: 'shortName',
        width: 'auto',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.shortName),
    },
    {
        title: 'Полное название',
        accessor: 'fullName',
        width: 'auto',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.fullName),
    },
];
