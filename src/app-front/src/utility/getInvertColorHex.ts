export const getInvertColorHex = (hex: string): string => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // Convert hex to RGB
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);
    // Invert RGB values
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    // Convert RGB back to hex
    return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}