// for (let i = 1; i <= 50; i++) {
//     console.log(i)
// }

// let num = 1;

// while (num <= 50) {
//     console.log(num);
//     num++
// }

// const arr =  [1, 2, 3, 4, 5];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let arr = [2, 3, 4, 5];
// let num = 1;

// for (let i = 0; i < arr.length; i++) {
//     num *= arr[i]
// }
// console.log(num)

//Задачи на объекты и массивы 

// const arr = [ 'Привет, ', 'мир',  '!'];

// const text = arr[0] + arr[1] + arr[2];

// console.log(text)

// const obj = {
//     'Коля':'1000',
//     'Вася':'500',
//     'Петя':'200'
// }

// console.log(obj['Коля'], obj['Петя'])

//задачи на методы

// const arr = ['a', 'b', 'c'];

// const arr2 = [1, 2, 3];

// const twoArr = arr.concat(arr2)

// console.log(twoArr)


// const arr = ['a', 'b', 'c'];

// arr.push(1, 2, 3)

// console.log(arr)


const superhero = [
  {
    id: 130, 
    name: "Batman",
    power: "bat"
  },
  {
    id: 71,
    name: "Superman", 
    power: "Laser"
  },
  {
    id: 100, 
    name:"Spider-man",
    power: "Spider"
  }
]

function XyuEgoZnaet (arr,  name, id, power, bored) {
    let nameHero = []
    for (let i = 0; i <= arr.length -1; i++){
        arr[i][bored] = 'hi'
        if (typeof arr[i][name] === "string" && 

            typeof arr[i][id] == 'number' &&

            typeof arr[i][power] == "string" &&
            
            typeof arr[i][bored] == 'boolean'){
              nameHero.push(arr[i][name])
        }else {
          return 'На сервере произошла ошибка!'
        }
      }
    return nameHero
}

console.log(XyuEgoZnaet(superhero, ['name'], ['id'], ['power'], ['bored']))








