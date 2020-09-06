const fillTemplate = (template, values) => {

    return  template.split(' ').map(it => {
        values.forEach(item => {
            if (it.includes(item.name)) {
                it = item.value;
            }
        })
        return it;
    }).join(' ');
}

//Сделайте функцию, которая считает и выводит количество своих вызовов.
const callingCounter = () => {
    let counter = 0;

    return () => {
        return counter++;
    }
}


module.exports = { fillTemplate }