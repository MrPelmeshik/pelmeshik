import {HeaderDataCell} from '@consta/table/HeaderDataCell';
import {HeaderDataCellProps} from '@consta/table/HeaderDataCell';
import {TableColumn} from '@consta/table/Table';
import {JSX} from "react";

export const DefaultHeaderComponent = (
    item?: TableColumn<any>,
    props?: HeaderDataCellProps
): JSX.Element => {
    const newProps: HeaderDataCellProps = {
        ...(props || {}),
        size: 's'
    };

    return <HeaderDataCell {...newProps}>
        {item?.title}
    </HeaderDataCell>
};