//1st task
const data = [
    {
        name: 'Ivan',
        surname: 'Ivanov',
        age: '29'
    },
    {
        name: 'Petr',
        surname: 'Petrov',
        age: '25'
    },
    {
        name: 'Vasya',
        surname: 'Vasiliev',
        age: '31'
    }
];
let searchValue = prompt("What's your surname?")

for (let i = 0; i < data.length ; i++) {
    
    if (searchValue === data[i].surname){
        alert(`User name: ${data[i].name}, User surname: ${data[i].surname}, User age: ${data[i].age}`);
    }else{
        alert(`No results found for your request!`);
    } 
    break;
}

//2nd task

const data = [
    {
        name: 'Ivan',
        surname: 'Ivanov',
        age: '29'
    },
    {
        name: 'Petr',
        surname: 'Petrov',
        age: '25'
    },
    {
        name: 'Vasya',
        surname: 'Vasiliev',
        age: '31'
    }
];
let searchValue = prompt("What's your surname?");
let resultValue = searchValue.toLowerCase();
let alertValue = 'No results found for your request!';

for (let i = 0; i < data.length ; i++) {
    if (resultValue === data[i].surname.toLowerCase()) {
        alertValue = `User name: ${data[i].name}, User surname: ${data[i].surname}, User age: ${data[i].age}`;
        break;
    }
}
alert(`${alertValue}`);

