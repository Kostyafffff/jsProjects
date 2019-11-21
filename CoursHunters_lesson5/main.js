let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let ul = document.querySelector(".list-group");
let deleteButtons = document.getElementsByClassName("delete-item");
let form = document.forms['addToDoItem'];
let inputText = form.elements['todoText'];

function generateList(tasksArray) {

    clearList();

    for (let i = 0; i < tasks.length; i++) {
        ul.appendChild(listTemplate(tasksArray[i]));
    }
}

function listTemplate(task) {
    let li = document.createElement("li");
    li.textContent = task;
    li.className = "list-group-item d-flex align-items-center";

    let iDelete = document.createElement("i");
    iDelete.className = "fas fa-trash-alt delete-item ml-4";

    let iEdit = document.createElement("i");
    iEdit.className = "fas fa-edit edit-item ml-auto";

    li.appendChild(iDelete);


    return li;
}

function clearList() {
    ul.innerHTML = "";
}


function addList(list) {
    tasks.unshift(list);
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
    // add to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
generateList(tasks);

//et btn = document.querySelector(".clear-btn");

function deleteListItem(target) {
    let parent = target.closest('li');
    let index = tasks.indexOf(parent.textContent);
    tasks.splice(index, 1);
    parent.remove();

    //update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        deleteListItem(e.target);
    }
});


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!inputText.value) {
        // show error
        inputText.classList.add('is-invalid');
    } else {
        inputText.classList.remove('is-invalid');
        addList(inputText.value);
        form.reset();
    }
});

inputText.addEventListener('keyup', function (e) {
    if (inputText.value) {
        inputText.classList.remove('is-invalid');
    }
});