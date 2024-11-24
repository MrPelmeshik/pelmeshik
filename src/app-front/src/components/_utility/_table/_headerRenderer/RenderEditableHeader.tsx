import {HeaderDataCell, HeaderDataCellProps} from "@consta/table/HeaderDataCell";
import { TableColumn } from "@consta/table/Table";
import {Button} from "@consta/uikit/Button";
import {IconUnsort} from "@consta/icons/IconUnsort";
import {IconFunnel} from "@consta/icons/IconFunnel";
import {IconKebab} from "@consta/icons/IconKebab";

export const RenderEditableHeader = (
    item?: TableColumn<any>,
    props?: HeaderDataCellProps
): JSX.Element => {
    const newProps: HeaderDataCellProps = {
        ...(props || {}),
        size: 's',
    };

    return <HeaderDataCell {...newProps}
                           controlRight={[
                               <Button size={'s'}
                                       view={'clear'}
                                       iconLeft={IconUnsort}
                                       onlyIcon
                               />,
                               <Button size={'s'}
                                       view={'clear'}
                                       iconLeft={IconFunnel}
                                       onlyIcon
                               />,
                               <Button size={'s'}
                                       view={'clear'}
                                       iconLeft={IconKebab}
                                       onlyIcon
                                       style={{marginRight: 'calc(var(--space-s)*2)'}} // todo: Надо будет разобраться почему кнопки сдвигаются вправо за края ячейки заголовка
                               />
                           ]}
    >
        {item?.title}
    </HeaderDataCell>
};