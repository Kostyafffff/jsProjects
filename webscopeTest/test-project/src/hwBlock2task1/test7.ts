export const replaceStr = (str: string): string =>
    str
       .split(/(?=[A-Z])/)
       .map(it => it.toLowerCase().replace(/[^A-Za-zА-Яа-яЁё]/g, ''))
       .join('-');
