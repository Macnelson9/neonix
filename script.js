'use strict';

const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('menu');
const mobileNav = document.querySelector('.mobile-nav-container');

openBtn.addEventListener('click', function () {
        mobileNav.classList.add('active');
})
closeBtn.addEventListener('click', function () {
        mobileNav.classList.remove('active');
})

// Animations control
// const timeline = gsap.timeline({defaults: {duration: 1}});

// timeline.from('.main-nav', {
//     y: '-100%',
//     ease: 'bounce'
// }).from('.main-ul, .nav-right ul', {
//     opacity: 0,
// }).from('.image-container', {
//     duration: 1.5,
//     x: '110%',
// }, '<1').from('.about-us', {
//     duration: 1,
//     y: '100%',
//     ease: 'elastic'
// }, '<1').from('.text-area', {
//     opacity: 0
// })

const timeline = gsap.timeline({
    defaults: { 
        duration: 1.5,
        ease: "power3.out"
    }
});

timeline.from('.main-nav', {
    y: '-100%',
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
    opacity: 0
}).from('.main-ul, .nav-right ul', {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    ease: 'power2.out'
}, '-=0.5').from('.image-container', {
    duration: 2,
    x: '120%',
    rotate: 10,
    ease: 'power4.out',
}, '-=1').from('.text-area', {
    opacity: 0,
    x: -50,
    duration: 1.2,
    ease: 'back.out(1.7)'
}, '-=1.5').from('.about-us', {
    duration: 1.5,
    y: '100%',
    ease: 'elastic.out(1, 0.3)',
    opacity: 0
}, '-=1')
