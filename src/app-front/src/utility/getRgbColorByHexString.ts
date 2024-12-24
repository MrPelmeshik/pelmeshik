export const getRgbColorByHexString = (hex: string): {r: number, g: number, b: number} => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }

    return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
    };
}