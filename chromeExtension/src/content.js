console.log('Extension is working')

const arrayOfLinks = () => {
    let resultArray = [];

    document.querySelectorAll('.item > a')
        .forEach(it => resultArray.push(it.href));

    return resultArray;
}
let a = arrayOfLinks();


