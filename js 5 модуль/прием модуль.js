// програмисты делять свой код на модули также как автор книгу на обзацы
// для этого используется прием модуль
// разделить каждый функцианал в отдельный файл как с css припроцесарами
// плюсы 1) модуль независим по свойе структуре и может легко быть удален или изменен
// глобальных перемен должно быть как можно меньше по скольку они заносятся в глобальную видимость
//модуль позволяют избежать загрезения глоб пространства и избежать конфликтные ситуация с одинаковыми именами
//2 сопсоба созданий модуля

// 1 ананимная самовызывающаясь функция

const number = 1; // глобально видимая переменная

(function(){ //анонимная потому что без имени, самовызвеющася потомучто сразуже вызвается на месте
    let number = 2
    console.log(number)
}())

console.log(number) // будет 1 а в анонимной функции консоль лог выведет 2
// это говорит о том что в этой функции уже другая переменная number


// 2 способой использование объектного интерфейса
// мы наш модульш пихаем в переменную и в неем возращаем методы соступные снаруже

const user = (function(){
    const privat = function () {
        console.log('hi im privat') // к этой функции не имеем доступ
    };

    return { // но мы можем вернуть
        sayHello: privat
    };
}());

user.sayHello()

