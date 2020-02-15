export const inc = () => ({type: 'INC' });
export const dec = () => ({type: 'DEC' });
export const rnd = () => {
    const randomVal = Math.floor(Math.random() * 10);
            return {
            type: 'RANDOM',
            payload: randomVal
        };
};
export const clr = () => ({type: 'CLEAR'});
export const one = () => ({type: 'ONE'});
