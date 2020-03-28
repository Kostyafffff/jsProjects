
export const countArrayMax = (array: number[]): number =>{
    const count = array.reduce((acc: any, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
    const keys: string[] = Object.keys(count);
    const arr: number[] = Object.values(count);
    let res = arr.map((it, index) => it % 2 !== 0 ? index : 0);

    console.log(res);

    return 1;
    };
