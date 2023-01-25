// setting a initial value of count
let count = 0;

// taking elements for HTMl
let value = document.getElementById('value');
// console.log(value);
let btns = document.querySelectorAll('.btns');
// console.log(btns);

// accessing each element in the array
btns.forEach((btn)=>{
    
    // console.log(btn);
    // adding a event listner when we click each item in array
    btn.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('decrease')){
             count--;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        else if(count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'black';
        }
        value.innerText = count;
    })
})