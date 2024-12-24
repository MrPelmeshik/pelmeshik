import {getRgbColorByHexString} from "./getRgbColorByHexString";

export const getInvertColorHex = (hex: string): string => {
    const color = getRgbColorByHexString(hex);

    return '#' +
        getValue(color.r) +
        getValue(color.g) +
        getValue(color.b);
}


const getValue = (value: number): string => {
    const chValue = value > 255 / 2
        ? 255 - value
        : value;

    return (255 - 255 % chValue)
        .toString(16)
        .padStart(2, '0');
}