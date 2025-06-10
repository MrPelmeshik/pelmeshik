import {IPageLink} from "./IPageLink";
import {FinanceComponent} from "../../_finance/Finance/FinanceComponent";
import {ToDoComponent} from "../../_todo/ToDo/ToDoComponent";

export const homePageLinkItem: IPageLink = {
    path: '/',
    title: 'Домой',
    element: null
}

export const pageLinkItems: IPageLink[] = [
    {
        path: '/finance',
        title: 'Финансы',
        element: FinanceComponent
    },
    {
        path: '/todo',
        title: 'Задачи',
        element: ToDoComponent
    },
];