import {getRgbColorByHexString} from "./getRgbColorByHexString";

export const getInvertColorHex = (hex: string): string => {
    const color = getRgbColorByHexString(hex);

    return '#' +
        (255 % color.r).toString(16).padStart(2, '0') +
        (255 % color.b).toString(16).padStart(2, '0') +
        (255 % color.b).toString(16).padStart(2, '0');
}