import {ITransactionFrequency} from "./ITransactionFrequency";
import {DefaultHeaderComponent} from "../../_table/_headerRenderer/_simple/DefaultHeaderComponent";
import {DefaultCellComponent} from "../../_table/_cellRenderer/_simple/DefaultCellComponent";
import {DefaultDetailsComponent} from "../../_table/_detailsRenderer/_simple/DefaultDetailsComponent";
import {NumberDetailsComponent} from "../../_table/_detailsRenderer/_simple/NumberDetailsComponent";
import {BooleanCellComponent} from "../../_table/_cellRenderer/_simple/BooleanCellComponent";
import {BooleanDetailsComponent} from "../../_table/_detailsRenderer/_simple/BooleanDetailsComponent";
import {DateTimeCellComponent} from "../../_table/_cellRenderer/_simple/DateTimeCellComponent";
import {DateTimeDetailsComponent} from "../../_table/_detailsRenderer/_simple/DateTimeDetailsComponent";
import {IColDef} from "../../_table/IColDef";

export const TransactionFrequencyColDefs: IColDef<ITransactionFrequency>[] = [
    {
        tableColumn: {
            title: 'ID',
            accessor: 'id',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.id),
        },
        detailsRenderer: NumberDetailsComponent,
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
    },
    {
        tableColumn: {
            title: 'Полное название',
            accessor: 'fullName',
            width: '2fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.fullName),
        },
        detailsRenderer: DefaultDetailsComponent,
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