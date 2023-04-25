export let one = 1;

let two = 2;

export {two};

export default function sayHi() { // default экспартирует по умолчанию только эту функцию
    console.log('hello')
}

// импорт

import {one as first, two} from './файл';
// as - переменивать
console.log(`${first} and ${two}`);

// збор модульной текстуры

//terminal - npx webpack

import * as data from './файл';

//* - все данные 
console.log(`${data.one} and ${data.two}`) 
// data - объект с свойствами one two( и другие данные)

import sayHi from './файл';  // функция ипортируется по дефолту пишем уже ее название при инпорте

//экспорт по умолчанию default может быть только один