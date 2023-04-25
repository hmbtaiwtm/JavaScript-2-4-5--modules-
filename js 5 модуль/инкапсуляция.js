// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`имя пользователя: ${this.name}, возраст ${userAge}`)
//     };

//     this.getAge = function() {// здесь мы возращаем userage что бы работать снаружи
//         return userAge;
//     };

//     this.setAge = function(age) { // в здесь можем изменять его
//          if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age
//          } else {
//             console.log('Хай бетмен')
//          }
//     }
// };

// const kris = new User('Kris', 16);

// console.log(kris.name);
// // console.log(kris.userAge); уже не нужна
// console.log(kris.getAge);

// kris.setAge(30);
// kris.setAge(300);

// console.log(kris.getAge);
// // kris.userAge = 17; - не нужна
// kris.name = 'Alex'

// kris.say()

// любой может вмешатся в работу объекта если использовать this.age и поменять значения которые стоят изначальна и нам нужно пофиксить такое и для этого и нужна инкапсуляция
// попробуем заменить this.age на переменую userAge которая хранит age и использовать ее и поменять потом запустив код мы увидем что метод say вивеет возраст 16 а kris.userAge = 17 - undefined дело в том что внутри функции мы создали переменную userAge которая недоступна снаруже потомучто это не свойство объекта и что бы работать с такими переменными нам нужно использовать геттеры и сеттеры

// теперь как это выглядет в классах 
class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    say () {
        console.log(`имя пользователя: ${this.name}, возраст ${this._age}`)
    }

    get age() {// здесь мы возращаем userage что бы работать снаружи
        return this._age;
    }

    set age (age) { // в здесь можем изменять его
         if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age
         } else {
            console.log('Хай бетмен')
         }
    }
};

const kris = new User('Kris', 16); // и для того что бы скрыть в классе нужно поставить _

console.log(kris.name);// и что бы правльно управлять этим свойтсво уже используем геттеры и сеттеры
console.log(kris.age) // ГЕТТЕР
kris.age = 99   // те геттеры в обычной функции не те что мы разбераем сейчас те помогают работать
console.log(kris.age) // СЕТТЕР
                    // console.log(kris.getAge()); // с обычной функции а эти геттеры и сеттеры с классами

kris.say()