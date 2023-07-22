var result=document.getElementsByClassName('dispScreen')[0];

function clearResult(){
    result.value='';
}

function deleteLastDigit(){
    result.value=result.value.slice(0,-1);
}

function symbolAction(symbol){
    result.value+=symbol;
}

function calculateResult(){
    result.value=eval(result.value);
}