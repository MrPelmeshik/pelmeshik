import {IAgent} from "./IAgent";
import {BooleanCellComponent} from "../../_table/_cellRenderer/_simple/BooleanCellComponent";
import {DefaultHeaderComponent} from "../../_table/_headerRenderer/_simple/DefaultHeaderComponent";
import {DefaultCellComponent} from "../../_table/_cellRenderer/_simple/DefaultCellComponent";
import {TableColDef} from "../../_table/TableColDef";
import {DefaultDetailsComponent} from "../../_table/_detailsRenderer/_simple/DefaultDetailsComponent";
import {BooleanDetailsComponent} from "../../_table/_detailsRenderer/_simple/BooleanDetailsComponent";
import {NumberDetailsComponent} from "../../_table/_detailsRenderer/_simple/NumberDetailsComponent";
import {DateTimeDetailsComponent} from "../../_table/_detailsRenderer/_simple/DateTimeDetailsComponent";
import {DateTimeCellComponent} from "../../_table/_cellRenderer/_simple/DateTimeCellComponent";

export const AgentColDefs: TableColDef<IAgent>[] = [
    {
        tableColumn: {
            title: 'ID',
            accessor: 'id',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.id),
        },
        detailsRenderer: NumberDetailsComponent,
        validators: [
            (props) => ({
                isValid: props.currentRow.id !== null,
                message: 'Поле ID не должно быть пустым',
            })
        ],
        isReadOnly: true,
    },
    {
        tableColumn: {
            title: 'Название',
            accessor: 'name',
            width: '2fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.name),
        },
        detailsRenderer: DefaultDetailsComponent,
        validators: [
            (props) => ({
                isValid: props.currentRow.name !== null,
                message: 'Поле Название не должно быть пустым',
            })
        ],
    },
    {
        tableColumn: {
            title: 'Физ. лицо',
            accessor: 'isPerson',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => BooleanCellComponent(props.row.isPerson)
        },
        detailsRenderer: BooleanDetailsComponent,
        validators: [
            (props) => ({
                isValid: props.currentRow.isPerson !== null,
                message: 'Поле Физ. лицо не должно быть пустым',
            })
        ],
    },
    {
        tableColumn: {
            title: 'Дата обновления',
            accessor: 'updateDate',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DateTimeCellComponent(props.row.updateDate),
        },
        detailsRenderer: DateTimeDetailsComponent,
        isReadOnly: true,
    },
    {
        tableColumn: {
            title: 'Признак активности',
            accessor: 'isActive',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => BooleanCellComponent(props.row.isActive)
        },
        detailsRenderer: BooleanDetailsComponent
    }
];