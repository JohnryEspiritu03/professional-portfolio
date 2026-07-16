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

// EXPERIENCE ACCORDION
const experienceCards = document.querySelectorAll('.experience__card'),
experienceButtons = document.querySelectorAll('.experience__button')

// iterates over each button found
experienceButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const currentCard = button.closest('.experience__card'),
        isOpen = currentCard.classList.contains('experience-open')

        // close all other experience data
        experienceCards.forEach(card =>{
            card.classList.replace('experience-open', 'experience-close')
        })

        // opens closed clicked card
        if(!isOpen){
            currentCard.classList.replace('experience-close', 'experience-open')
        }
    })
})


// EMAIL JS
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {
    e.preventDefault()

    try{
        // serviceID - templateID - #form - publicKey
        await emailjs.sendForm('service_24eqfom','template_e7nshui','#contact-form','NRuND4r-6TNsRvkA7')

        // show sent message
        contactMessage.textContent = 'Message sent successfully'

        // clear input fields
        contactForm.reset()
    } catch(error){
        contactMessage.textContent = 'Message not sent (service error)'
    } finally{
        setTimeout(() => contactMessage.textContent = '', 5000)
    }
}
contactForm.addEventListener('submit', sendEmail)

// SHOW SCROLL UP
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id,
        top = section.offsetTop - 50,
        height = section.offsetHeight,
        link = document.querySelector('.nav__menu a[href*=' + id + ']')

        if(!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
    })
}
window.addEventListener('scroll', scrollActive)

// CUSTOM CURSOR
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0

const cursorMove = () =>{
    cursor.style.left = `${mouseX}px`
    cursor.style.top = `${mouseY}px`
    cursor.style.transform = `translate(-50%, -50%)`

    requestAnimationFrame(cursorMove)
}
document.addEventListener('mousemove', (e) =>{
    mouseX = e.clientX
    mouseY = e.clientY
})
cursorMove()

// hide custom cursor on links
const a = document.querySelectorAll('a')

a.forEach(item =>{
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor')
    })

    item.addEventListener('mouseleave', () =>{
        cursor.classList.remove('hide-cursor')
    })
})

// SCROLLREVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 300,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    reset:true,
})

sr.reveal(`.home__subtitle`)
sr.reveal(`.home__title`, {delay:600})
sr.reveal(`.home__description`, {delay:900})
sr.reveal(`.home__box-1`, {delay:1200, rotate:{z: -20}})
sr.reveal(`.home__box-2`, {delay:1300, rotate:{z: -30}})
sr.reveal(`.home__box-3`, {delay:1400, rotate:{z: -40}})
sr.reveal(`.home__img`, {delay:1700, distance: '-60px'})
sr.reveal(`.home__circle`, {delay:2000, distance: '-100px'})

sr.reveal(`.about__title`)
sr.reveal(`.about__description`, {delay:600})
sr.reveal(`.about__button`, {delay:900})

sr.reveal(`.project__swiper`)

sr.reveal(`.experience__card:nth-child(odd)`, {interval: 200, origin: 'left', distance: '100px'})
sr.reveal(`.experience__card:nth-child(even)`, {interval: 200, origin: 'right', distance: '100px'})

sr.reveal(`.skills__description`)
sr.reveal(`.skills__card`, {delay:600, interval: 200})
sr.reveal(`.skills__profession`, {delay:900})
sr.reveal(`.skills__list`, {delay:1200, interval: 200})

sr.reveal(`.contact__form`)
sr.reveal(`.contact__link`, {delay:600, interval: 200})

sr.reveal(`.footer__container`)