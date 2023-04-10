const log = function (a, b, ...resst) { // пишеться оператор в конце и после него его названия
    console.log(a, b, rest)
}

//rest оператор собирает отдельные сущности в массив

// параметры по умолчанию - вдруг аргумент не будет передан то по умолчанию передастся другой

function calcOrDouble(number, basic) {
    basic = basic || 2; // 2 будет по умолчанию
    console.log(number * basic);
}

calcOrDouble(3) // передан только 1 аргумент 
// теперь все проще чем этот способ, это параметр по умолчанию вписуют прямо при обявление функции

function calcOrDouble(number, basic = 2) {
    basic = basic || 2; 
    console.log(number * basic); 
    return 
}