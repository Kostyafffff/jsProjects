let tasks = [
    "Пройти собес JS",
    "Разобраться с React",
    "Кайфовать люто"
];

let ul = document.querySelector(".list-group");
let deleteButtons = document.getElementsByClassName("delete-item");

function generateList(tasksArray) {

    clearList();

    for (let i = 0; i < tasks.length; i++) {
        ul.appendChild(listTemplate(tasksArray[i]));
    }

    // setDeleteEvent();
}

function listTemplate(task) {
    //create list item
    let li = document.createElement("li");
    li.textContent = task;
    li.className = "list-group-item d-flex align-items-center";
    // create tag i fa-thrash-item
    let iDelete = document.createElement("i");
    iDelete.className = "fas fa-trash-alt delete-item ml-auto";

    // append delete iconE
    li.appendChild(iDelete);
    return li;
}

function clearList() {
    ul.innerHTML = "";
}


function addList(list) {
    tasks.unshift(list);
    generateList(tasks);
}
generateList(tasks);

let btn = document.querySelector(".clear-btn");

function deleteListItem(target) {
    let parent = e.target.closest('li');
    let index = tasks.indexOf(parent.textContent);
    tasks.splice(index, 1);
    parent.remove();
}

ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        deleteListItem(e.target);
    }
});

function onClick(e) {
    console.log('click');
}
btn.addEventListener("click", onClick);