export interface IMenuItem {
    id: number;
    groupId: number;
    label: string;
    element: JSX.Element;
    disabled?: boolean;
}