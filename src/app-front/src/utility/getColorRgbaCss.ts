import {getRgbColorByHexString} from "./getRgbColorByHexString";

export const getColorRgbaCss = (hex: string, opacity: number = 1): string => {
    let color = getRgbColorByHexString(hex);

    return 'rgba(' +
        color.r + ',' +
        color.g + ',' +
        color.b + ',' +
        opacity + ')';
}