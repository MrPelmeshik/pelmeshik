import {IFieldId} from "../../../types/_baseModel/IFieldId";

export type TableType<T extends IFieldId> = {
    [P in keyof T]: P extends 'id'
        ? string
        : T[P];
} & {
    id: string;
};