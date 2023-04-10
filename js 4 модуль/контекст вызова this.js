// это то что окружает функцию и в каких условиях она вызивается
// 4 способа вызова функции и контекст в ней разный 


"use strict"
//1)
function showThis (a, b) {
    console.log(this);
    function sum () {
        console.log(this)
        return a + b
    }

    console.log(sum())
};

showThis(4, 5);

//2)
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        function shout() {
            console.log(this)
        }
        shout()
    }
}

obj.sum()
//3)
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true; 
    this.hello = function() {
        console.log("hello !" + this.name)
    }
}
let ivan = new User('ivan', 23);

//4)
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
}

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count (num) {
    return this*num
}

const double = count.bind(2)
console.log(double(3))
console.log(double(13))
// 1) обычная функция this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект 
// 3) this в конструкторах и классах - это новый экземпляр объекта 
// 4) ручная привязка this: call, apply, bind

// реальный пример

const btn = document.querySelector('button');
 
btn.addEventListener('click', function () {
    console.log(this)
})
// правило! когда у нас обработчик события который идет как коллбек функция написан в класическом режиме как в примерер в таком случае контекст this будет сам елемент на котором произошло событие

const object = {
    num: 5,
    sayNember: function () {
        const say = () => {
            console.log(this)
        };
        say()
    }
}

object.sayNember()

// если в примерах по выше мы использовали бы обычную функцию то мы бы получили undefined но callback функция он не имеет свое контекста по этому берет у родителя а у родителя этой функции контекст выхова ссылаеться на объект и нам в консоль выведет объект

const doub = a => a * 2 //скороченая колбек функция return сам поставиться 
console.log(doub(4))

Вывод
// Сама по себе - this относится к глобальному объекту (window).
// В методе - this относится к родительскому объекту.
// В функции - this относится к глобальному объекту.
// В функции в 'strict mode' - this = undefined.
// В стрелочной функции - this относится к контексту где функция была создана.
// В событии - this ссылается на элемент запустивший событие.



