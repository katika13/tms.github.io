//task1: Создать переменную, которая содержит строку
//Вывести значение этой переменной в alert
//Изменить значение переменной
//Результат снова вывести в консоль


let name = 'Ivan'
alert(name)
name = 'Kate'
console.log(name)


//task2: Создать шесть переменных, в каждой из которых будет разных типов данных
//Вывести их в alert
//Вывести объекты в консоль

let now = new Date()
let isSummer = true
let months = ['June', 'July', 'August']
let name = 'Tom'
let age = '28'
let weather
alert(`${now} ${isSummer} ${months} ${name} ${age} ${weather}`)
console.log(now + isSummer + months + name + age + weather)


//task3: Вывести окно prompt с вопросом о возрасте
//В зависимости от ответа выводим alert с текстом “поздравляем, вам n полных лет”
//Вывести окно alert с утверждением совершеннолетний пользователь или нет
let age = prompt('Сколько вам полных лет?');
alert(`Поздравляем, вам ${age} полных лет!`);
if (age >= 18) {
    alert(`Пользователь совершеннолентний`)
}else{
    alert(`Пользователь несовершеннолентний`)
}
