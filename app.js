const titreSpans = document.querySelectorAll('h1 span');
const sloganSpans = document.querySelectorAll('h2 span');

const btns = document.querySelectorAll('.btns');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');

const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.circle');

const address = document.querySelector('.address-container');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1.8, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(sloganSpans, 1, {top: '-2.6vw', opacity: 0, ease: "power2.out"}, 0, '-=1')
    .from(logo, 0.8, {transform: "scale(0)", ease: "power1.out"}, '-=2')
    .from(address, 4, {opacity: 0, ease: "power2.out"})
    .staggerFrom(medias, 1, {right: -200, opacity: 0, ease: "power2.out"}, 0.3, '-=5');

    TL.play();
})
