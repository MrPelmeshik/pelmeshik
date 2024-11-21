import {TableColumn} from "@consta/table/Table";
import {TableType} from "../../../types/TableType";
import {IAgent} from "./IAgent";
import {RenderTextCell} from "../../_utility/_table/_cellRenderer/RenderTextCell";
import {RenderBooleanCell} from "../../_utility/_table/_cellRenderer/RenderBooleanCell";
import { HeaderDataCell } from '@consta/table/HeaderDataCell';
import {RenderDefaultHeader} from "../../_utility/_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_utility/_table/_cellRenderer/RenderDefaultCell";

export const AgentColDefs: TableColumn<TableType<IAgent>>[] = [
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
        title: 'Физ. лицо',
        accessor: 'isPerson',
        width: '1fr',
        renderHeaderCell: RenderDefaultHeader,
        renderCell: (props) => RenderBooleanCell(props.row.isPerson)
    },
];