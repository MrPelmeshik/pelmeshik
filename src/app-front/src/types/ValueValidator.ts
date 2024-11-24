import {ValueValidatorProps} from "./ValueValidatorProps";

export type ValueValidator<T> = (props: ValueValidatorProps<T>) => {
    isValid: boolean;
    message: string;
}