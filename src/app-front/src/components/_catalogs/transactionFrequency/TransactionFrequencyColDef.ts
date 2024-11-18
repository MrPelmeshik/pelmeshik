import {TableColumn} from "@consta/table/Table";
import {TableType} from "../../../types/TableType";
import {ITransactionFrequency} from "./ITransactionFrequency";
import {RenderTextCell} from "../../_utility/_table/_cellRenderer/RenderTextCell";
import {RenderDefaultHeader} from "../../_utility/_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_utility/_table/_cellRenderer/RenderDefaultCell";

export const TransactionFrequencyColDef: TableColumn<TableType<ITransactionFrequency>>[] = [
    {
        title: 'ID',
        accessor: 'id',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.id),
    },
    {
        title: 'Название',
        accessor: 'name',
        width: '1fr',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.name),
    },
    {
        title: 'Полное название',
        accessor: 'fullName',
        width: '1fr',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderDefaultCell(props.row.fullName),
    },
];