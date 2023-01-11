const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const wrapper = document.querySelector(".wrapper");


const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");








hamburger.addEventListener("click", burgeractive);

function burgeractive(){
    console.log("jhsdfhs")
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    bar1.classList.toggle("active");
    bar2.classList.toggle("active");
    bar3.classList.toggle("active");  
}


