let transition = "0";
let total = 0;
let previousOperator = null;
let screen = document.querySelector(".calc__output");

document.querySelector('.calc__container').addEventListener('click', function(event){
    buttonClick(event.target.innerText)
})


function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value)
    }else{
        handleNumber(value)
    }   
    reRender()
}




function handleNumber(value){
    if(transition === "0"){
        transition = value;
    }else{
        transition += value;
    }
}


function handleSymbol(value){
    switch (value) {
        case "AC":
            transition = "0",
            total = 0,
            previousOperator = null
            break;
        
        case  "=":
           
        if(previousOperator === null){
            return;
        }
        flushOperation(parseInt(transition));
            previousOperator = null;
            transition = "" + total;
            total = 0;
            break;

        case "&#8592":
        if(transition.length === 1){
            transition = "0"
        }else{
            transition = transition.substring(0, transition.length - 1)
        }
         break;  

        default:
            handleMath(value)
            break;
    }
}
function handleMath(value){
    const intTransition = parseInt(transition);
    if(total === 0){
        total = intTransition;
    }else {
        flushOperation(intTransition);
    }
    previousOperator = value;
    //console.log( "previousOperator =", previousOperator)
    transition = "0";
}
function flushOperation(intTransition){
    if(previousOperator === "+"){
        total += intTransition
    }else if(previousOperator === "-"){
        total -= intTransition
    }else if(previousOperator === "&#215"){
        total += intTransition
        console.log(total)
       
    }else if(previousOperator === "%"){
        total %= intTransition
    }
    else{
        previousOperator === "&#xF7"
            total /= intTransition
    }
}
function reRender(){
    screen.innerText = transition
    
}
