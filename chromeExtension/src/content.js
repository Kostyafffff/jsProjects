console.log('Extension is working')

const arrayOfLinks = () => {
    let resultArray = [];

    document.querySelectorAll('.item > a')
        .forEach(it => resultArray.push(it.href));

    return resultArray;
}
let linksMock = arrayOfLinks();

let videos = document.querySelectorAll('.item > a');

const borderWrapper = (videos, linksMock) => {

    if(videos.length === linksMock.length) {
        return linksMock.forEach((link, index) => {
            videos[index].href === link ? videos[index].style.border = '5px solid green'
                                        : videos[index].style.border = '5px solid red'

        })
    }
}

borderWrapper(videos, linksMock);



console.log(linksMock);

