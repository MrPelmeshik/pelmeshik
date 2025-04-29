import {ITag} from "./ITag";

export interface TagProps {
    size: 'xs' | 's' | 'm' | 'l';
    minified?: boolean;
    data: ITag;
}