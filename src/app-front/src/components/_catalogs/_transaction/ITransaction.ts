import {IFieldId} from "../../../types/_baseModel/IFieldId";
import {IFieldUpdateDate} from "../../../types/_baseModel/IFieldUpdateDate";
import {IFieldIsActive} from "../../../types/_baseModel/IFieldIsActive";

export interface ITransaction extends  IFieldId, IFieldUpdateDate, IFieldIsActive {
    shortDescription: string;
    description: string;
    value: number;
    date: Date;
    transactionFrequencyId: number;
    cardId: number;
    agentId: number;
    categoryId: number;
    tagIds: number[];
}