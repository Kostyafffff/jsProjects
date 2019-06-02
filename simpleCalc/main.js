window.addEventListener('load', function OnWindowLoaded() {
    var signs = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', 'c'
    ];

    //calc form
    var calc = document.getElementById('calc');

    var textArea = document.getElementById('inputVal');

    //add buttons
    signs.forEach(function (sign) {
        var signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });



    document.querySelectorAll('#calc-wrapper .btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });

    function onButtonClick(e) {
        if (e.target.innerHTML === 'c') {
            textArea.innerHTML = '0';
        } else if (e.target.innerHTML === '=') {
            textArea.innerHTML = eval(textArea.innerHTML);
        } else if (textArea.innerHTML === '0') {
            textArea.innerHTML = e.target.innerHTML;
        } else {   
            textArea.innerHTML += e.target.innerHTML;
        }
    }
});