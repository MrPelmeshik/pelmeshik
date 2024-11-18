import {MenuProps} from "./MenuProps";
import css from './Menu.module.css';
import {List, ListBox} from "@consta/uikit/ListCanary";
import {useVirtualScroll} from '@consta/uikit/useVirtualScroll';
import {TestBlockComponent} from "../TestBlock/TestBlockComponent";
import {CatalogTypeEnum} from "../_catalogs/CatalogTypeEnum";
import {BaseTableComponent} from "../BaseTable/BaseTableComponent";
import {CardColDef} from "../_catalogs/card/CardColDef";
import {AgentColDef} from "../_catalogs/agent/AgentColDef";
import {TransactionFrequencyColDef} from "../_catalogs/transactionFrequency/TransactionFrequencyColDef";
import {TagColDef} from "../_catalogs/tag/TagColDef";
import {CategoryColDef} from "../_catalogs/category/CategoryColDef";

export const MenuComponent = (props: MenuProps): JSX.Element => {
    type Item = {
        label: string;
        id: number;
        groupId: number;
        element: JSX.Element;
        disabled?: boolean;
    };

    type Group = {
        label: string;
        id: number;
        rightSide?: React.ReactNode;
    };

    const groups: Group[] = [
        {
            id: 1,
            label: 'Каталоги',
        },
        {
            id: 2,
            label: 'Разделы',
        },
        {
            id: 3,
            label: 'Визуализация',
        },
    ];

    const items: Item[] = [
        {
            label: 'Карты',
            id: 1,
            groupId: 1,
            element: <BaseTableComponent key={CatalogTypeEnum.CARD}
                                         catalogType={CatalogTypeEnum.CARD}
                                         colDef={CardColDef}
            />,
        },
        {
            label: 'Агенты',
            id: 2,
            groupId: 1,
            element: <BaseTableComponent key={CatalogTypeEnum.AGENT}
                                         catalogType={CatalogTypeEnum.AGENT}
                                         colDef={AgentColDef}
            />,
        },
        {
            label: 'Категории',
            id: 3,
            groupId: 1,
            element: <BaseTableComponent key={CatalogTypeEnum.CATEGORY}
                                         catalogType={CatalogTypeEnum.CATEGORY}
                                         colDef={CategoryColDef}
            />,
        },
        {
            label: 'Теги',
            id: 4,
            groupId: 1,
            element: <BaseTableComponent key={CatalogTypeEnum.TAG}
                                         catalogType={CatalogTypeEnum.TAG}
                                         colDef={TagColDef}
            />,
        },
        {
            label: 'Периодичность транзакций',
            id: 5,
            groupId: 1,
            element: <BaseTableComponent key={CatalogTypeEnum.TRANSACTION_FREQUENCY}
                                         catalogType={CatalogTypeEnum.TRANSACTION_FREQUENCY}
                                         colDef={TransactionFrequencyColDef}
            />,
        },
        {
            label: 'Транзакции',
            id: 6,
            groupId: 2,
            element: <TestBlockComponent />,
            disabled: true,
        },
        {
            label: 'Дашборд по расходам',
            id: 7,
            groupId: 3,
            element: <TestBlockComponent />,
            disabled: true,
        },
        {
            label: 'Тест',
            id: 8,
            groupId: 1,
            element: <TestBlockComponent />,
        },
        {
            label: 'Тест 2',
            id: 8,
            groupId: 1,
            element: <BaseTableComponent key={CatalogTypeEnum.ERROR_ENDPOINT}
                                         catalogType={CatalogTypeEnum.ERROR_ENDPOINT}
                                         colDef={TagColDef}
            />,
        },
    ];

    const {listRefs, scrollElementRef, slice, spaceTop} = useVirtualScroll({
        length: items.length,
        isActive: true,
    });

    return <ListBox ref={scrollElementRef}
                    className={css.body}
                    size={'s'}
                    border
                    placeholder=""
                    onPointerEnterCapture={() => {
                    }}
                    onPointerLeaveCapture={() => {
                    }}
    >
        <List items={items}
              groups={groups}
              size={'s'}
              onItemClick={(item) => props.setMainBlock(item.element)}
              itemSpase={{p: 'xs'}}
              groupLabelSpase={{mH: 'xs', pT: 's', pB: 'xs'}}
        />
    </ListBox>;
}