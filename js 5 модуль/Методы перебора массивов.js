'use strict'

//метод forech  никогда не возращает новый мисив

// методы дальше будут возращать новый массив


// filtre - фильтрует
// const names = ['Kris', 'Ann', 'Andrew', 'Voldemart'];

// const shortName = names.filter((name) => {
//      return name.length < 5;
// }) 

// console.log(shortName)


// map - трансформирует каждый елемент массива в нутри, возращает новый массив
// const answers = ['IvAn', 'AnNa', 'HellO'];

// const result = answers.map(item => item.toLowerCase()) 

// console.log(result)


// every/some - возращает true если хоть один елемент подходит по условию и false если нет
// every - если все, some - несколько елементов
// const some = [4, 'qwq', 'afasfs'];

// // console.log(some.some(item =>  typeof(item) === 'number'))
// // в короткой записи стрелочной функции return подставляется автоматически

// console.log(some.every(item =>  typeof(item) === 'number'))


// reduce - собирает массив в один единый, это метот тоже возращает новый результат

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((sum, current) => sum + current, 3)
// третий аргумент указем с чего начинается чему равен sum
// // изначально sum = 0, current - каждый елемент приходящий их массива

// console.log(result)

// пример уже со строками
// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(result)


практика

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr =  Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0])

// //entries - создает из объекта массив в массиве

// console.log(newArr)


// ВСЕ ЭТИ МЕТОДЫ ПОЗВОЛЯЮТ ВЕРНУТЬ НАМ НОВЫЙ МАССИВ, И МЫ МОЖЕМ ЗАПУСКАТЬ ИХ ПО ЦЫПОЧКЕ

// const arr = ['arr' ,  'kris', 'Bro', 'cat', 'Xochitl'];

// const newArr = 

// console.log(newArr)










