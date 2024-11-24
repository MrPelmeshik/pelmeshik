import {ICategory} from "./ICategory";
import {RenderColorCell} from "../../_utility/_table/_cellRenderer/RenderColorCell";
import {RenderDefaultHeader} from "../../_utility/_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_utility/_table/_cellRenderer/RenderDefaultCell";
import {TableColDef} from "../../../types/TableColDef";
import {RenderDefaultDetails} from "../../_utility/_table/_detailsRenderer/RenderDefaultDetails";

export const CategoryColDefs: TableColDef<ICategory>[] = [
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
            width: '2fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.name),
        },
        detailsRenderer: RenderDefaultDetails,
    },
    {
        tableColumn: {
            title: 'Цвет',
            accessor: 'color',
            width: '1fr',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderColorCell(props.row.color),
        },
        detailsRenderer: RenderDefaultDetails,
    },
];