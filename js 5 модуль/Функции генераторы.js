// эта функция генерирует нам генерирует результат последовательно

// function* generator() {
//     yield 'S'; // yield - выдает последовательно
//     yield 'C';
//     yield 'R'; 
// }

// const str = generator();

// console.log(str.next()); //сам yield не пойдет дальше для этого есть метод next

// // когда функция срабатывает  она дает объект {value: (наше значение), done: false}
// // done - выполнелся ли наш генератор или нет но пока что false хотя все выполнелось

function* count(n) {
    for(let i = 0; i < n; i++) {
        yield i
    }
}

for (let k of count(7)) { //вывести максимвльно много раз
    console.log(k)
}

// const counter = count(7)

// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)