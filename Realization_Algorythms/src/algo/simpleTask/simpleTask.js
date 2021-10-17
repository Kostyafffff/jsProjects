export const inputOutPut222222222 = (data) => {
    const arr = data.split('&').map(it => it.split('='));
    const letters = Array.from(new Set(arr.map(it => it[0])));
    const val = arr.map(it => [it[0], it[1].split(',').map(it => parseInt(it))]);

    const startObj = letters.reduce((obj, key) => ({ ...obj, [key]: []}), {})

    val.forEach(it => {
        Object.keys(startObj).forEach(objKey => {
            if(it[0] === objKey){
              startObj[objKey].push(...it[1]);
              startObj[objKey] = [...new Set(startObj[objKey])];
            }
        })
    })

    return startObj ;
};
