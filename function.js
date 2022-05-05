const menu = document.querySelector("#menu");
const menuLinks = document.querySelector(".menu-bar");

//display mobile menu

const mobileMenu = () =>{
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);