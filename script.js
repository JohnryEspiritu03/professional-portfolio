// show and close menu
console.log("Script loaded!");

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'), 
    navClose = document.getElementById('nav-close');

// show menu   
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// close menu
if (navClose) {
    navClose.addEventListener('click', () => { 
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
    console.log("Link clicked");
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))