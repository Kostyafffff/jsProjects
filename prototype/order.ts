const order = (words: String): String => {
    let arr: String[] = words.split( " ");

    let obj = {};


    arr.forEach(it => (it.match(/\d+/).input));


    return arr.join();
};

const x:String = order('is2 Thi1s T4est 3a');
console.log(x);