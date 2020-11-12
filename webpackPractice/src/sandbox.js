Object.prototype.mergeLeft = function (obj){
    const currentProps = Object.keys(this).sort();
    const objProps = Object.keys(obj).sort();

    if(!('mergedProperties' in obj)) {
        if (currentProps.length < objProps.length) {
            const usefulProps = objProps.filter((it, index) => it !== currentProps[index]);

            const resultObj = usefulProps.reduce((acc, currVal) => {
                return {
                    ...acc,
                    [currVal]: obj[currVal]
                }
            }, {})

            return {
                ...this,
                ...resultObj,
                mergedProperties: usefulProps
            };
        }

        if(currentProps.length > objProps.length){
            const usefulProps = currentProps.filter((it, index) => it !== objProps[index]);

            const resultObj = usefulProps.reduce((acc, currVal) => {
                return {
                    ...acc,
                    [currVal]: obj[currVal]
                }
            }, {})

            return {
                ...this,
                ...resultObj,
                mergedProperties: usefulProps
            };
        }
    }
    else {
        if (currentProps.length < objProps.length) {
            const usefulProps = objProps.filter((it, index) => it !== currentProps[index]);

            const resultObj = usefulProps.reduce((acc, currVal) => {
                return {
                    ...acc,
                    [currVal]: obj[currVal]
                }
            }, {})

            return {
                ...this,
                ...resultObj,
            };
        }

        if(currentProps.length > objProps.length){
            const usefulProps = currentProps.filter((it, index) => it !== objProps[index]);

            const resultObj = usefulProps.reduce((acc, currVal) => {
                return {
                    ...acc,
                    [currVal]: obj[currVal]
                }
            }, {})

            return {
                ...this,
                ...resultObj,
            };
        }
    }
}



let a = {a: 12}
let b = {a: 200, b: 300, c: 400}
let c = {b: 3000, c: 4000}


let result = a.mergeLeft(b).mergeLeft(c);
console.log(result)
