export const getRandomDouble = (min: number, max: number, accuracy: number = 1): number => {
    return Number((min + Math.random() * (max - min)).toFixed(accuracy));
}