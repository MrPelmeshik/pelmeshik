import {IPageLink} from "./IPageLink";

export const homePageLinkItem: IPageLink = {
    path: '/',
    title: 'Домой'
}

export const pageLinkItems: IPageLink[] = [
    {
        path: '/finance',
        title: 'Финансы',
    },
    {
        path: '/todo',
        title: 'Задачи',
    },
];