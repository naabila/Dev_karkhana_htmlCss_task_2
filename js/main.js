
const mobile_nav= document.querySelector(".mobile-nav-button");
const nav_headr= document.querySelector(".header");

const toggleNavbar= ()=>{

    nav_headr.classList.toggle("active")

};

mobile_nav.addEventListener("click",()=>toggleNavbar());