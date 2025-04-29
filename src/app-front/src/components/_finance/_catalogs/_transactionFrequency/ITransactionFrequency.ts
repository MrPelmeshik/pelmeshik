import {IFieldId} from "../../../../types/_baseModel/IFieldId";
import {IFieldUpdateDate} from "../../../../types/_baseModel/IFieldUpdateDate";
import {IFieldIsActive} from "../../../../types/_baseModel/IFieldIsActive";
import {IFieldName} from "../../../../types/_baseModel/IFieldName";

export interface ITransactionFrequency extends  IFieldId, IFieldUpdateDate, IFieldIsActive, IFieldName {
    fullName: string
}