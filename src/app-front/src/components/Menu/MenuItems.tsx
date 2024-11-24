import {IMenuItem} from "./IMenuItem";
import {TableComponent} from "../_table/Table/TableComponent";
import {CatalogTypeEnum} from "../_catalogs/CatalogTypeEnum";
import {CardColDefs} from "../_catalogs/card/CardColDefs";
import {AgentColDefs} from "../_catalogs/agent/AgentColDefs";
import {CategoryColDefs} from "../_catalogs/category/CategoryColDefs";
import {TagColDefs} from "../_catalogs/tag/TagColDefs";
import {TransactionFrequencyColDefs} from "../_catalogs/transactionFrequency/TransactionFrequencyColDefs";

export const MenuItems: IMenuItem[] = [
    {
        label: 'Карты',
        id: 1,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.CARD}
                                 title={'Карты'}
                                 catalogType={CatalogTypeEnum.CARD}
                                 colDefs={CardColDefs}
        />,
    },
    {
        label: 'Агенты',
        id: 2,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.AGENT}
                                 title={'Агенты'}
                                 catalogType={CatalogTypeEnum.AGENT}
                                 colDefs={AgentColDefs}
        />,
    },
    {
        label: 'Категории',
        id: 3,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.CATEGORY}
                                 title={'Категории'}
                                 catalogType={CatalogTypeEnum.CATEGORY}
                                 colDefs={CategoryColDefs}
        />,
    },
    {
        label: 'Теги',
        id: 4,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.TAG}
                                 title={'Теги'}
                                 catalogType={CatalogTypeEnum.TAG}
                                 colDefs={TagColDefs}
        />,
    },
    {
        label: 'Периодичность транзакций',
        id: 5,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.TRANSACTION_FREQUENCY}
                                 title={'Периодичность транзакций'}
                                 catalogType={CatalogTypeEnum.TRANSACTION_FREQUENCY}
                                 colDefs={TransactionFrequencyColDefs}
        />,
    },
    {
        label: 'Транзакции',
        id: 6,
        groupId: 2,
        element: <></>,
        disabled: true,
    },
    {
        label: 'Дашборд по расходам',
        id: 7,
        groupId: 3,
        element: <></>,
        disabled: true,
    },
    {
        label: 'Тест',
        id: 8,
        groupId: 1,
        element: <></>,
    },
    /*{
        label: 'Тест 2',
        id: 8,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.ERROR_ENDPOINT}
                                 title={'Тест 2'}
                                 catalogType={CatalogTypeEnum.ERROR_ENDPOINT}
                                 colDefs={[]}
        />,
    },*/
];