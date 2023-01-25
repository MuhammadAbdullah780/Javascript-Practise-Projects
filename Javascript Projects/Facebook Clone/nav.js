
// ----------------ACCESSING ELEMENTS FROM DOM--------------

// ==============DECLARING VARIABLES FROM HTML===============
let MiddleIconDiv = document.querySelectorAll('.middle-divs');
// console.log(MiddleIconDiv);
let DisplayMiddleDivs = document.getElementsByClassName('hover-class');
// console.log(DisplayMiddleDivs);
let AppsIconButton = document.querySelector('#App-icon');
// console.log(AppsIconButton);
const AppsIconDiv = document.getElementById('Apps-div');
// console.log(AppsIconDiv);
let MenuIcon = document.querySelector('#right-menu');

let MessageIcon = document.querySelector('.message-icon');
// console.log(MessageIcon);
let MessageContainer = document.querySelector('.message-container');
// console.log(MessageContainer);


// ===============ALL ABOUT FOR THE RIGHT ICONS===================================

AppsIconButton.addEventListener('click',()=>{

    if(AppsIconDiv.style.display === 'none'){
        AppsIconDiv.style.display = 'flex';
        MenuIcon.classList.add('active-icon');
    }
    else{
        AppsIconDiv.style.display = 'none';
        MenuIcon.classList.remove('active-icon');
    }

    // if(AppsIconDiv.style.display = 'flex'){
    //     AppsIconButton.style.color = '#1770E6';
    //     MenuIcon.style.backgroundColor = '#DBE7F2';
    // }
});


MessageIcon.addEventListener('click',()=>{
    console.log('clicked');
    if(MessageContainer.style.display === 'none'){
        MessageContainer.style.display = 'flex';
        MessageIcon.classList.add('active-icon');
    }
    else{
        MessageContainer.style.display = 'none';
        MessageIcon.classList.remove('active-icon');
    }

    // if(AppsIconDiv.style.display = 'flex'){
    //     AppsIconButton.style.color = '#1770E6';
    //     MenuIcon.style.backgroundColor = '#DBE7F2';
    // }
});


















// =====================ALL ABOUT FOR================================
// =====================MIDDLE ICONS=================================

// -----------procedure for displaying middle icon divs -----------
MiddleIconDiv.forEach((Div) => {
    // console.log(Div);
    Div.addEventListener('mouseover',(e)=>{
    const TargetDiv = e.currentTarget;
        if(TargetDiv.classList.contains('home')){
            DisplayMiddleDivs[0].classList.add('active-middle-div');
            DisplayMiddleDivs[1].classList.remove('active-middle-div');
            DisplayMiddleDivs[2].classList.remove('active-middle-div');
            DisplayMiddleDivs[3].classList.remove('active-middle-div');
            DisplayMiddleDivs[4].classList.remove('active-middle-div');

        }
        else if(TargetDiv.classList.contains('watch')){
            DisplayMiddleDivs[1].classList.add('active-middle-div');
            DisplayMiddleDivs[0].classList.remove('active-middle-div');
            DisplayMiddleDivs[2].classList.remove('active-middle-div');
            DisplayMiddleDivs[3].classList.remove('active-middle-div');
            DisplayMiddleDivs[4].classList.remove('active-middle-div');
        }
        else if(TargetDiv.classList.contains('marketplace')){
            DisplayMiddleDivs[2].classList.add('active-middle-div');
            DisplayMiddleDivs[1].classList.remove('active-middle-div');
            DisplayMiddleDivs[0].classList.remove('active-middle-div');
            DisplayMiddleDivs[3].classList.remove('active-middle-div');
            DisplayMiddleDivs[4].classList.remove('active-middle-div');
        }
        else if(TargetDiv.classList.contains('groups')){
            DisplayMiddleDivs[3].classList.add('active-middle-div');
            DisplayMiddleDivs[1].classList.remove('active-middle-div');
            DisplayMiddleDivs[2].classList.remove('active-middle-div');
            DisplayMiddleDivs[0].classList.remove('active-middle-div');
            DisplayMiddleDivs[4].classList.remove('active-middle-div');
        }
        else {
            DisplayMiddleDivs[4].classList.add('active-middle-div');
            DisplayMiddleDivs[1].classList.remove('active-middle-div');
            DisplayMiddleDivs[2].classList.remove('active-middle-div');
            DisplayMiddleDivs[3].classList.remove('active-middle-div');
            DisplayMiddleDivs[0].classList.remove('active-middle-div');
        }
    });

     Div.addEventListener('mouseout',(e)=>{
        // console.log('hello');
        DisplayMiddleDivs[1].classList.remove('active-middle-div');
        DisplayMiddleDivs[2].classList.remove('active-middle-div');
        DisplayMiddleDivs[3].classList.remove('active-middle-div');
        DisplayMiddleDivs[0].classList.remove('active-middle-div');
        DisplayMiddleDivs[4].classList.remove('active-middle-div');
     });

});