//Задание 2! Массив уникальных случайных цифр.

//Создадим массив для семи элементов;
//Заполним его случайными цифрами от 0 до 10;
//Цифры в массиве не должны повторяться;
//Вывести этот массив в консоль;
//Упорядочить массив;
//Еще раз вывести его в консоль.

function getRandom(min, max) {
    let resArray = [];
    for(let i = 0; resArray.length < 7; i++){
    arrElement = Math.floor(Math.random() * (max - min)) + min;
        if (resArray.indexOf(arrElement) === -1) {
            resArray.push(arrElement); 
        }
    }
    return resArray
}

let newArray = getRandom(0, 11);
console.log(newArray);

let newArraySort = getRandom(0, 11).sort();
console.log(newArraySort);