let money = prompt("What's your budget?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");

let appData = {
    budget : money,
    timeData : time 
};

let expenses = {
    question1:question2
};

var budgetForOneDay = appData.budget / 30;
alert(budgetForOneDay);