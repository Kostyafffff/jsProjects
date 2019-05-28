const x = document.getElementById("form_sample");

const createForm = document.createElement('form');

createForm.setAttribute("action", "");

createForm.setAttribute("method", "post");

x.appendChild(createForm);

let heading = document.createElement('h2');
heading.innerHTML = "Contact Form";
createForm.appendChild(heading);

let line = document.createElement('hr');
createForm.appendChild(line);

let linebreak = document.createElement('br');
createForm.appendChild(linebreak);

let emaillabel = document.createElement('label');
emaillabel.innerHTML = "Your Email : ";
createForm.appendChild(emaillabel);

let emailelement = document.createElement('input');
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createForm.appendChild(emailelement);

let emailbreak = document.createElement('br');
createForm.appendChild(emailbreak);

let messageLabel = document.createElement('label');
messageLabel.innerHTML = "Your Message : ";
createForm.appendChild(messageLabel);

let textAreaElement = document.createElement('textarea');
textAreaElement.setAttribute("name", "dmessage");
createForm.appendChild(textAreaElement);

let checkBox = document.createElement('input');
checkBox.type = "checkbox";
checkBox.validity = "value";
checkBox.id = "smartChB";
createForm.appendChild(checkBox);

let messageBreak = document.createElement('br');
createForm.appendChild(messageBreak);

//submit button
let submitBtnElement = document.createElement('input');
submitBtnElement.setAttribute("type", "submit");
submitBtnElement.setAttribute("name", "dsubmit");
submitBtnElement.setAttribute("value", "Submit");
createForm.appendChild(submitBtnElement);

window.addEventListener("DOMContentLoaded", function () {

    let myChekBox = document.getElementById("smartChB");

    if (localStorage.getItem("isChecked") === "true") {
        checkBox.checked = true;
    }
    myChekBox.addEventListener("click", function () {
        localStorage.setItem("isChecked", true);
    });
});