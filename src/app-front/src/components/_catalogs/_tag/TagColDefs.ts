import {ITag} from "./ITag";
import {ColorCellComponent} from "../../_table/_cellRenderer/_simple/ColorCellComponent";
import {DefaultHeaderComponent} from "../../_table/_headerRenderer/_simple/DefaultHeaderComponent";
import {DefaultDetailsComponent} from "../../_table/_detailsRenderer/_simple/DefaultDetailsComponent";
import {DefaultCellComponent} from "../../_table/_cellRenderer/_simple/DefaultCellComponent";
import {NumberDetailsComponent} from "../../_table/_detailsRenderer/_simple/NumberDetailsComponent";
import {ColorDetailsComponent} from "../../_table/_detailsRenderer/_simple/ColorDetailsComponent";
import { BooleanCellComponent } from "../../_table/_cellRenderer/_simple/BooleanCellComponent";
import { BooleanDetailsComponent } from "../../_table/_detailsRenderer/_simple/BooleanDetailsComponent";
import {DateTimeCellComponent} from "../../_table/_cellRenderer/_simple/DateTimeCellComponent";
import {DateTimeDetailsComponent} from "../../_table/_detailsRenderer/_simple/DateTimeDetailsComponent";
import {ITableColDef} from "../../_table/ITableColDef";

export const TagColDefs: ITableColDef<ITag>[] = [
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
            title: 'Цвет',
            accessor: 'color',
            width: '1fr',
            renderHeaderCell: DefaultHeaderComponent,
            renderCell: (props) => ColorCellComponent(props.row.color),
        },
        detailsRenderer: ColorDetailsComponent,
        defaultValue: '#000000',
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