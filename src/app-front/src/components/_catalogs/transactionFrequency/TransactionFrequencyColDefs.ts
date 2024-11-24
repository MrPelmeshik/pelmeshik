import {ITransactionFrequency} from "./ITransactionFrequency";
import {RenderTextCell} from "../../_table/_cellRenderer/RenderTextCell";
import {RenderDefaultHeader} from "../../_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_table/_cellRenderer/RenderDefaultCell";
import {TableColDef} from "../../_table/TableColDef";
import {RenderDefaultDetails} from "../../_table/_detailsRenderer/RenderDefaultDetails";

export const TransactionFrequencyColDefs: TableColDef<ITransactionFrequency>[] = [
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
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.name),
        },
        detailsRenderer: RenderDefaultDetails,
    },
    {
        tableColumn: {
            title: 'Полное название',
            accessor: 'fullName',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.fullName),
        },
        detailsRenderer: RenderDefaultDetails,
    },
];