import {ICard} from "./ICard";
import {RenderDefaultHeader} from "../../_utility/_table/_headerRenderer/RenderDefaultHeader";
import {RenderDefaultCell} from "../../_utility/_table/_cellRenderer/RenderDefaultCell";
import {TableColDef} from "../../../types/TableColDef";
import {RenderDefaultDetails} from "../../_utility/_table/_detailsRenderer/RenderDefaultDetails";

export const CardColDefs: TableColDef<ICard>[] = [
    {
        tableColumn: {
            title: 'ID',
            accessor: 'id',
            width: 'auto',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.id),
        },
        detailsRenderer: RenderDefaultDetails,
    },
    {
        tableColumn: {
            title: 'Название',
            accessor: 'name',
            width: 'auto',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.name),
        },
        detailsRenderer: RenderDefaultDetails,
    },
    {
        tableColumn: {
            title: 'Короткое название',
            accessor: 'shortName',
            width: 'auto',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.shortName),
        },
        detailsRenderer: RenderDefaultDetails,
    },
    {
        tableColumn: {
            title: 'Полное название',
            accessor: 'fullName',
            width: 'auto',
            renderHeaderCell: RenderDefaultHeader,
            renderCell: (props) => RenderDefaultCell(props.row.fullName),
        },
        detailsRenderer: RenderDefaultDetails,
    },
];
