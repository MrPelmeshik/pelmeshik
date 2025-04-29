import {IFieldId} from "../../../../types/_baseModel/IFieldId";
import {IFieldUpdateDate} from "../../../../types/_baseModel/IFieldUpdateDate";
import {IFieldIsActive} from "../../../../types/_baseModel/IFieldIsActive";
import {IFieldName} from "../../../../types/_baseModel/IFieldName";
import {IFieldColor} from "../../../../types/_baseModel/IFieldColor";

export interface ICategory extends IFieldId, IFieldUpdateDate, IFieldIsActive, IFieldName, IFieldColor {
}