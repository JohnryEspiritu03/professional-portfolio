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

// home text circular

const homeText = document.getElementById('home-text'),
letters = homeText.textContent.trim().split(''), //converts text to array
angleStep = 360/letters.length //angle for each character based on length

homeText.textContent='' //clears orgiginal content

//iterates through each character
letters.forEach((char, i) =>{
    const span = document.createElement('span') //creates span for each letter
    span.textContent = char //inserts each char into the span
    span.style.transform = `rotate(${i*angleStep}deg)` //rotates each letter
    homeText.appendChild(span)//appends span on the main container
})

// HOME TYPED JS
const typedHome = new Typed('#home-typed', {
    strings: ['ML Engineer', 'Data Analyst', 'ITE Instructor'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop:true,
});

// CHANGE HEADER STYLES
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('scroll-header'): header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// SWIPER JS

const swiperProject = new Swiper('.project__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed:600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   }
});