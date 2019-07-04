let tasks = [
    "Пройти собес JS",
    "Разобраться с React",
    "Кайфовать люто"
];

let ul = document.querySelector(".list-group");

function generateList(tasksArray) {

    clearList();

    for (let i = 0; i < tasks.length; i++) {
        ul.appendChild(listTemplate(tasksArray[i]));
    }
}

function listTemplate(task) {
    let li = document.createElement("li");
    li.textContent = task;
    li.className = "list-group-item";

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