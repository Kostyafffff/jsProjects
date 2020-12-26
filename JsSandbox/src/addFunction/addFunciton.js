const sp = document.createElement('div')
sp.setAttribute('id', 'parent2');
document.body.append(sp)

const createElement = (tag, className, parent, content) => {
    const element = document.createElement(tag);

    if(className) {
        setClass(className, element)
    }

    if(document.querySelector(parent) !== null){
        setText(element, content);
        return document.querySelector(parent).appendChild(element);
    }

    setText(element, content);
    return document.body.append(element);
}

const setText = (element, content) => {
    if(typeof content === "object") {
       return element.innerHTML = content.join().split(',').join(' ');
    } else {
       return  element.innerHTML = content;
    }
}

const setClass = (className, element) => {
    if(typeof className.split(' ') === 'object'){
        const str = className
            .split(' ')

        return str.map(it => element.classList.add(it));
    }

    if(typeof className === 'string') {
        return element.classList.add(className);
    }

    if(typeof className === 'object') {
        return element.classList.add(...className);
    }
};

 createElement('div', 'aaaa ssssz', '#parent2', 'sss');


// Аргументы функции
// tag - имя тега которое функция должна создать
// className - строка с именами классов, или же массив строк с именами классов
//   может быть пропущен, указан null или undefined, чтобы у элемента не было классов
// parent - селектор элемента или же ссылка на сам элемент куда необходимо поместить созданный элемент
//   может быть не указан как и className, тогда элемент просто должен быть создан но не помещен в дерево
//   Если указан селектор, и элемент не найден, то не добавлять элемент НИКУДА
// content - элемент, строка или массив элементов и строк которые должны быть помещены в созданный элемент
