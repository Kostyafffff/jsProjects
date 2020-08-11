document.addEventListener('DOMContentLoaded', () => {

    let arr = ['Kostya', 'Andrey', 'Oleh'];

   let dom = arr.forEach(it => {
       let el = document.createElement("p")
       el.innerHTML = it;
       el.innerText = `лучший ${it}`
       el.classList.add('friends');

       document.body.appendChild(el);
   })
})
