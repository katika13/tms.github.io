//Task 1 - fizzBuzz

function fizzBuzz(n){
    if (Number.isInteger(n) === true){
            for(let i = 1; i <= n; i++){
            if(i%5 === 0 && i%3 === 0){
                console.log(`fizzbuzz`);
            }else if(i%5 === 0){
                console.log(`buzz`);
            }else if(i%3 === 0){
                console.log(`fizz`);
            }else{
                console.log(i);;
            }     
        }
    }else{
        console.log(`${n} is not integer`)
    }
}
    
    
//Task 2 - isAnagram

//v.1
function toClearStr(str){
    clearStr = str.toLowerCase().replace(/[^\w]+/g,'').split('').sort().join('');
    return clearStr
}

function isAnagram(a = "finder", b = "friend"){
    if(toClearStr(a) === toClearStr(b)){
        return true;
    }else{
        return alert(`"${a}" and "${b}" aren't anagrams`);
    }
}

//final ver
    
const toClearStr(str) => str.toLowerCase().replace(/[^\w]+/g,'').split('').sort().join('');
const isAnagram(a = "finder", b = "friend") => (toClearStr(a) === toClearStr(b)) ? true : alert(`"${a}" and "${b}" aren't anagrams`);

isAnagram(); //true
isAnagram("Cat !", "Act."); //true
isAnagram("Space", "pace"); //false
isAnagram("Ana gram", "gram-ana"); //true


//Task 3 - Fibonacci 

//var.1

function fibonacci(n) {
    if (Number.isInteger(n) === true && n >= 0){
        let arrStart = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        if( n > (arrStart.length - 1) ){
            let fibonacciArray = [...arrStart];
            do{
                let newArrayItem = fibonacciArray.reduce((acc, curr) => {
                    acc = fibonacciArray[fibonacciArray.length - 2] + curr
                    return acc
                },arrStart[arrStart.lenght - 2]);
                fibonacciArray.push(newArrayItem);
            }while (fibonacciArray.length < (n+1))
            return fibonacciArray[n];
        }else{
            return arrStart[n];
        }
    }else{
        console.log(`Please, use correct number`)
    }
}
///
//let prev1
//let prev2
//
//for (let i=9; i <= n; i++){
//    prev1 = arr[i-2];
//    prev2 = arr[i-1];
//    arr.push(prev1 + prev2)
//}
//// через рекурсию зацикленная функция сама на себя
//let arr=[0,1]
//function fibonacci(n){
//    if(n<2){
//        return n
//    }
//    return fibonacci(n-1) + fibonacci(n-2)
//}


//var.2 to do



fibonacci(-9); // Please, use correct number
fibonacci(8.9); // Please, use correct number
fibonacci(12); // 144
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(10); // 55
fibonacci(9); // 34
fibonacci(0); // 0
fibonacci(99); // 218922995834555200000


//Task 4 - sumAllPageNumbers

function sum(n) {
    let pageNumbers = [];
    for (let i = 1; i <= n; i++) {
        pageNumbers.push(i); //arr[i] return pageNumbers.join('').split('').reduce((acc, curr) => {
    }
    let sumAllPageNumbers = pageNumbers.toString().replace(/,+/g,'').split('').reduce((acc, curr) => {
        parseInt(acc) += parseInt(curr);
    },);
    return sumAllPageNumbers
}

sum(500); // 5505
sum(199); // 1900
sum(5); // 15
sum(20); // 102
