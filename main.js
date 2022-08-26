window.addEventListener('scroll', () => {
  var nav = document.querySelector('#header')
  nav.classList.toggle('nav-fixed', this.window.scrollY > 0)
})

function download(dataurl, filename) {
  const link = document.createElement("a");
  link.href = 'Currículo - Raian Henrique.pdf';
  link.download = 'Currículo - Raian Henrique.pdf';
  link.click();
}

//download("data:text/html,HelloWorld!", "Currículo - Raian Henrique.pdf");


function EasterEgg(){
  console.log('NEVER GIVE UP')
}


//SCROLL REVEAL=====================================================

ScrollReveal().reveal('.logo', { delay: 1000 })

ScrollReveal().reveal('.text-holder', {
  reset: true,
  delay: 500,
  duration: 500,
  origin: 'bottom',
  distance: '100px'
})

ScrollReveal().reveal('.hero-about', {
  reset: true,
  delay: 1000,
  origin: 'left',
  distance: '100px'
})
ScrollReveal().reveal('.text-about', {
  reset: true,
  delay: 500,
  origin: 'bottom',
  distance: '100px'
})

ScrollReveal().reveal('.services-text', {
  reset: true,
  delay: 400,
  origin: 'top',
  distance: '100px'
})
ScrollReveal().reveal('.services-cards', {
  reset: true,
  delay: 800,
  origin: 'bottom',
  distance: '200px'
})

ScrollReveal().reveal('.skills-text', {
  reset: true,
  delay: 400,
  origin: 'top',
  distance: '100px'
})
ScrollReveal().reveal('.skills-container-left', {
  reset: true,
  delay: 800,
  origin: 'left',
  distance: '200px'
})

ScrollReveal().reveal('.portifolio-text', {
  reset: true,
  delay: 400,
  origin: 'top',
  distance: '100px'
})

ScrollReveal().reveal('.contacts-text', {
  reset: true,
  delay: 400
})
ScrollReveal().reveal('.inputs-container', {
  reset: true,
  delay: 400
})
ScrollReveal().reveal('.my_infos-container', {
  reset: true,
  delay: 400
})
