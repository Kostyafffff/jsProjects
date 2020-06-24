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

module.exports = { fillTemplate }