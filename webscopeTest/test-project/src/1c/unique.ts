export const unique = (array: number[]) => array.length === 0 ? [] : [... new Set(array)];
