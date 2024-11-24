import {IAgent} from "./IAgent";
import {RenderBooleanCell} from "../../_table/_cellRenderer/RenderBooleanCell";
import {RenderDefaultHeader} from "../../_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_table/_cellRenderer/RenderDefaultCell";
import {TableColDef} from "../../_table/TableColDef";
import {RenderDefaultDetails} from "../../_table/_detailsRenderer/RenderDefaultDetails";

export const AgentColDefs: TableColDef<IAgent>[] = [
    {
        tableColumn: {
            title: 'ID',
            accessor: 'id',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.id),
        },
        detailsRenderer: RenderDefaultDetails,
        validators: [
            (props) => ({
                isValid: props.currentRow.id !== null,
                message: 'Поле ID не должно быть пустым',
            })
        ]
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
        validators: [
            (props) => ({
                isValid: props.currentRow.name !== null,
                message: 'Поле Название не должно быть пустым',
            })
        ]
    },
    {
        tableColumn: {
            title: 'Физ. лицо',
            accessor: 'isPerson',
            width: '1fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderBooleanCell(props.row.isPerson)
        },
        detailsRenderer: RenderDefaultDetails,
        validators: [
            (props) => ({
                isValid: props.currentRow.isPerson !== null,
                message: 'Поле Физ. лицо не должно быть пустым',
            })
        ]
    },
];