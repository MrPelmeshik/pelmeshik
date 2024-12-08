import {IMenuItem} from "./IMenuItem";
import {TableComponent} from "../_table/Table/TableComponent";
import {CatalogTypeEnum} from "../_catalogs/CatalogTypeEnum";
import {CardColDefs} from "../_catalogs/_card/CardColDefs";
import {AgentColDefs} from "../_catalogs/_agent/AgentColDefs";
import {CategoryColDefs} from "../_catalogs/_category/CategoryColDefs";
import {TagColDefs} from "../_catalogs/_tag/TagColDefs";
import {TransactionFrequencyColDefs} from "../_catalogs/_transactionFrequency/TransactionFrequencyColDefs";
import {TransactionColDefs} from "../_catalogs/_transaction/TransactionColDef";

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
        element: <TableComponent key={CatalogTypeEnum.TRANSACTION}
                                 title={'Транзакции'}
                                 catalogType={CatalogTypeEnum.TRANSACTION}
                                 colDefs={TransactionColDefs}
        />,
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