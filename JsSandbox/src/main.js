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

const Counnter = () => {

    let counter = 0;
    const upp = () => {
        return counter++;
    }

    const down = () => {
        return counter--;
    }
}

module.exports = { fillTemplate, Counnter }