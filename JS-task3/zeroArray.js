//Задание 3! Замена элементов массива.

//Создадим массив с десятью случайными элементами от 0 до 100;
//Напишем инструкцию, которая будет заменять все “0” на строку “zero”;
//Выводим полученный массив в консоль.
//прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

function getRandom(min, max) {
    let resArray = [];
    for(let i = 0; resArray.length < 10; i++){
        resArray.push(Math.floor(Math.random() * (max - min)) + min); 
    }
    return resArray
}
let newArray = getRandom(0, 101);
console.log(newArray);

let delZeroArray = newArray.toString().replace(0,'zero').split(',');
console.log(delZeroArray);

