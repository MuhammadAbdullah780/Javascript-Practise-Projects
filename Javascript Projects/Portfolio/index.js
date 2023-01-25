let MenuIconButton = document.querySelectorAll(".control-icons");
let MenuDiv = document.querySelector('.control-div');
let  Target;

// ================ TOGGLE BUTTON FUNCTIONALITY ============
function toggle(){
    if(document.body.classList.contains("dark-mode")){
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
    else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    }
    // document.body.classList.toggle('light-mode');
}

// ================== PRELOADER FUNCTIONALITY =============
function load(){
    let Preloader = document.getElementById("preloader");
    let LoaderContainer = document.getElementById("load-container");
    Preloader.style.display = "none";
    LoaderContainer.style.display = "none";
}
window.onload = setTimeout(load, 4000)


// ========== SECTION OPEN FUNCTIONALITY ========
MenuIconButton.forEach((icon)=>{
    icon.addEventListener('click', function(e){
        MenuIconButton.forEach((icon)=>{icon.classList.remove('active')});
        icon.classList.add("active");
        let Target = icon.dataset.id;
        // console.log(Target)
        document.querySelector(".active-sec").classList.remove("active-sec");
        document.getElementById(Target).classList.add("active-sec");
    });
});

