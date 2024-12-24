import {IValueValidatorProps} from "./IValueValidatorProps";

export type ValueValidator<T> = (props: IValueValidatorProps<T>) => {
    isValid: boolean;
    message: string;
}