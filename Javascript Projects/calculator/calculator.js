 /* ==================================================
    ==========TAKING ELEMENTS FROM DOM ============
    ==================================================  */
const Numbers = document.querySelectorAll('.numbers');
const DataValue = document.querySelector('#output');
const operators = document.querySelectorAll('.operators');
const ClearButton = document.querySelector('.clear');
const DeleteButton = document.querySelector(".delete");
const EqualsButton = document.querySelector(".calculatebutton");
const DotButton = document.querySelector(".dot");



// =============================================
// =========ADDING DOT BUTTON FUNCTION========
// =============================================
function dot(){
    DataValue.value += ".";
    console.log("error");
    DotButton.removeAttribute("onclick");
}


// =============================================
// =========ADDING EQUAL BUTTON FUNCTION========
// =============================================
EqualsButton.addEventListener('click', ()=>{
    try{
        DataValue.value = eval(DataValue.value);
    }
    catch(error){
        DataValue.value = "Math Error";
    }
    DotButton.setAttribute("onclick", "dot()");
    setTimeout(clear, 500);
});



// =============CREATING DELETE BUTTON FUNCTION===========
DeleteButton.addEventListener('click',()=>{
    DataValue.value = DataValue.value.slice(0,-1);    
});



// =============CREATING FUNCTION FOR AC BUTTON====
ClearButton.addEventListener('click', clear);
function clear(){
    DataValue.value = "";
}


// ==============OPERATOR FUNCTION ==============
operators.forEach((operator)=>{
    operator.addEventListener('click',(e)=>{
    CurrentOperator = e.currentTarget.innerHTML;
    DataValue.value = DataValue.value + CurrentOperator;
 });
});


// =============CREATING FUNCTION FOR Numbers=================
Numbers.forEach((number) =>{
    number.addEventListener('click',(e)=>{
        let ClickedNum = e.currentTarget.innerHTML;
        console.log(ClickedNum);
        DataValue.value += ClickedNum;
    });
});