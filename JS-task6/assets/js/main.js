function buttonFizzBuzz(){
    const fizzbuzzArr = [];
    
    function fizzBuzz(n){
        if (Number.isInteger(n) === true){
            for(let i = 1; i <= n; i++){
                if(i%5 === 0 && i%3 === 0){
                    fizzbuzzArr.push("fizzbuzz");
                }else if(i%5 === 0){
                    fizzbuzzArr.push("buzz");
                }else if(i%3 === 0){
                    fizzbuzzArr.push("fizz");
                }else{
                    fizzbuzzArr.push(i);
                } 
            };
        }else{
            alert(`Введите целое число!`)
        }
    };

    fizzBuzz(parseInt(prompt('Введите целое число от 1 до n:', '')));
    //console.log(fizzbuzzArr);
    const fragment = document.createDocumentFragment();
    fizzbuzzArr.forEach(fizzbuzzArr => {
        const item = document.createElement("li");
        item.textContent = fizzbuzzArr;
        fragment.appendChild(item);
    }); 
    document.getElementById('fizzbuzz-list').appendChild(fragment);
};
