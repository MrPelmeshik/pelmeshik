import {BooleanCellComponent} from "../../_table/_cellRenderer/_simple/BooleanCellComponent";
import {DefaultHeaderComponent} from "../../_table/_headerRenderer/_simple/DefaultHeaderComponent";
import {DefaultCellComponent} from "../../_table/_cellRenderer/_simple/DefaultCellComponent";
import {TableColDef} from "../../_table/TableColDef";
import {BooleanDetailsComponent} from "../../_table/_detailsRenderer/_simple/BooleanDetailsComponent";
import {NumberDetailsComponent} from "../../_table/_detailsRenderer/_simple/NumberDetailsComponent";
import {DateTimeDetailsComponent} from "../../_table/_detailsRenderer/_simple/DateTimeDetailsComponent";
import {DateTimeCellComponent} from "../../_table/_cellRenderer/_simple/DateTimeCellComponent";
import {ITransaction} from "./ITransaction";
import {DefaultDetailsComponent} from "../../_table/_detailsRenderer/_simple/DefaultDetailsComponent";

export const TransactionColDefs: TableColDef<ITransaction>[] = [
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
            title: 'Дата',
            accessor: 'date',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DateTimeCellComponent(props.row.date),
        },
        detailsRenderer: DateTimeDetailsComponent
    },
    {
        tableColumn: {
            title: 'Краткое описание',
            accessor: 'shortDescription',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.shortDescription),
        },
        detailsRenderer: DefaultDetailsComponent
    },
    {
        tableColumn: {
            title: 'Описание',
            accessor: 'description',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.description),
        },
        detailsRenderer: DefaultDetailsComponent
    },
    {
        tableColumn: {
            title: 'Сумма',
            accessor: 'value',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.value),
        },
        detailsRenderer: NumberDetailsComponent
    },
    {
        tableColumn: {
            title: 'Карта',
            accessor: 'cardId',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.cardId),
        },
        detailsRenderer: DefaultDetailsComponent
    },
    {
        tableColumn: {
            title: 'Периодичность транзакции',
            accessor: 'transactionFrequencyId',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.transactionFrequencyId),
        },
        detailsRenderer: DefaultDetailsComponent,
    },
    {
        tableColumn: {
            title: 'Категория',
            accessor: 'categoryId',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.categoryId),
        },
        detailsRenderer: DefaultDetailsComponent,
    },
    {
        tableColumn: {
            title: 'Тэг',
            accessor: 'tagIds',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.tagIds),
        },
        detailsRenderer: DefaultDetailsComponent
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