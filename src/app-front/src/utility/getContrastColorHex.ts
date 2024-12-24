import {getRgbColorByHexString} from "./getRgbColorByHexString";

export const getContrastColorHex = (hex: string): string => {
    const color = getRgbColorByHexString(hex);

    return ((color.r * 299) + (color.g * 587) + (color.b * 114)) / 1000 >= 128
        ? '#000000'
        : '#ffffff';
}