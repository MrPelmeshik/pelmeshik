import {BooleanCellComponent} from "../../_table/_cellRenderer/_simple/BooleanCellComponent";
import {DefaultHeaderComponent} from "../../_table/_headerRenderer/_simple/DefaultHeaderComponent";
import {DefaultCellComponent} from "../../_table/_cellRenderer/_simple/DefaultCellComponent";
import {TableColDef} from "../../_table/TableColDef";
import {DefaultDetailsComponent} from "../../_table/_detailsRenderer/_simple/DefaultDetailsComponent";
import {BooleanDetailsComponent} from "../../_table/_detailsRenderer/_simple/BooleanDetailsComponent";
import {NumberDetailsComponent} from "../../_table/_detailsRenderer/_simple/NumberDetailsComponent";
import {DateTimeDetailsComponent} from "../../_table/_detailsRenderer/_simple/DateTimeDetailsComponent";
import {DateTimeCellComponent} from "../../_table/_cellRenderer/_simple/DateTimeCellComponent";
import {ITransaction} from "./ITransaction";
import {TagComponent} from "../_tag/TagComponent";
import {ComponentCellComponent} from "../../_table/_cellRenderer/ComponentCell/ComponentCellComponent";
import {TagProps} from "../_tag/TagProps";

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
            title: 'Тэг',
            accessor: 'tagIds',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => DefaultCellComponent(props.row.tagIds),
        },
        detailsRenderer: DateTimeDetailsComponent,
        isReadOnly: true,
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