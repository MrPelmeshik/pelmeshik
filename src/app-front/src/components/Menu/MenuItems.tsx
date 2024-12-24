import {IMenuItem} from "./IMenuItem";
import {TableComponent} from "../_table/Table/TableComponent";
import {CatalogTypeEnum} from "../../types/CatalogTypeEnum";
import {CardColDefs} from "../_catalogs/_card/CardColDefs";
import {AgentColDefs} from "../_catalogs/_agent/AgentColDefs";
import {CategoryColDefs} from "../_catalogs/_category/CategoryColDefs";
import {TagColDefs} from "../_catalogs/_tag/TagColDefs";
import {TransactionFrequencyColDefs} from "../_catalogs/_transactionFrequency/TransactionFrequencyColDefs";
import {TransactionColDefs} from "../_catalogs/_transaction/TransactionColDef";
import {TransactionSrcCfg} from "../_catalogs/_transaction/TransactionSrcCfg";
import {TransactionFrequencySrcCfg} from "../_catalogs/_transactionFrequency/TransactionFrequencySrcCfg";
import {TagSrcCfg} from "../_catalogs/_tag/TagSrcCfg";
import {CategorySrcCfg} from "../_catalogs/_category/CategorySrcCfg";
import {AgentSrcCfg} from "../_catalogs/_agent/AgentSrcCfg";
import {CardSrcCfg} from "../_catalogs/_card/CardSrcCfg";
import {CardTableCfg} from "../_catalogs/_card/CardTableCfg";
import {AgentTableCfg} from "../_catalogs/_agent/AgentTableCfg";
import {CategoryTableCfg} from "../_catalogs/_category/CategoryTableCfg";
import {TagTableCfg} from "../_catalogs/_tag/TagTableCfg";
import {TransactionTableCfg} from "../_catalogs/_transaction/TransactionTableCfg";
import {TransactionFrequencyTableCfg} from "../_catalogs/_transactionFrequency/TransactionFrequencyTableCfg";

export const MenuItems: IMenuItem[] = [
    {
        label: 'Карты',
        id: 1,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.CARD}
                                 title={'Карты'}
                                 tableCfg={CardTableCfg}
        />,
    },
    {
        label: 'Агенты',
        id: 2,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.AGENT}
                                 title={'Агенты'}
                                 tableCfg={AgentTableCfg}
        />,
    },
    {
        label: 'Категории',
        id: 3,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.CATEGORY}
                                 title={'Категории'}
                                 tableCfg={CategoryTableCfg}
        />,
    },
    {
        label: 'Теги',
        id: 4,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.TAG}
                                 title={'Теги'}
                                 tableCfg={TagTableCfg}
        />,
    },
    {
        label: 'Периодичность транзакций',
        id: 5,
        groupId: 1,
        element: <TableComponent key={CatalogTypeEnum.TRANSACTION_FREQUENCY}
                                 title={'Периодичность транзакций'}
                                 tableCfg={TransactionFrequencyTableCfg}
        />,
    },
    {
        label: 'Транзакции',
        id: 6,
        groupId: 2,
        element: <TableComponent key={CatalogTypeEnum.TRANSACTION}
                                 title={'Транзакции'}
                                 tableCfg={TransactionTableCfg}
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