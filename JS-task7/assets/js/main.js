const calcBlock = document.getElementById("calc");
const genBlock = document.getElementById("generator");
const btnGen = document.querySelector("button");
const resetBtn = document.getElementsByClassName("reset")[0];


btnGen.addEventListener('click', function(e){ 
    let inputValue = genBlock.querySelector("input").value;
    if (inputValue > 20){
        alert('Введите число от 1 до 20');
    }else{
        genBlock.setAttribute("hidden", true);
        console.log(inputValue);
        let calcBtnArr = []
        for (let i = 1; i <= inputValue; i++) {
            calcBtnArr.push(i);
        }
        console.log(calcBtnArr);
        calcBlock.removeAttribute("hidden");

        const fragment = document.createDocumentFragment();

        calcBtnArr.forEach(calcBtnArr => {
            let div = document.createElement("div");
            let plusBtn = document.createElement("button");
            let minusBtn = document.createElement("button");
            plusBtn.setAttribute('value', calcBtnArr);
            plusBtn.classList.add("plus-btn");
            plusBtn.textContent = `+ ${calcBtnArr}`;
            minusBtn.setAttribute('value', calcBtnArr);
            minusBtn.textContent = `- ${calcBtnArr}`;
            minusBtn.classList.add("minus-btn");
            div.appendChild(plusBtn);
            div.appendChild(minusBtn);
            fragment.appendChild(div);
        }); 
        calcBlock.insertBefore(fragment, resetBtn)

        let calcElm = calcBlock.getElementsByTagName("input")[0];

        calcBlock.addEventListener('click', e => {
            if (e.target.className === 'plus-btn'){
                calcElm.value = parseInt(calcElm.value) + parseInt(e.target.value);
            }else if (e.target.className === 'minus-btn'){
                calcElm.value = parseInt(calcElm.value) - parseInt(e.target.value);
            }
        });

        resetBtn.addEventListener('click', function(e){
            genBlock.removeAttribute("hidden");
            calcBlock.setAttribute("hidden", true);
            calcElm.value = 0;
            calcBlock.removeChild(calcBlock);
        });
    }
});




  