'use strict';


/*
    MITT Tools and Automation
    Paul Funston

    My website
*/

// utility functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function sleep(duration) {
  return new Promise(resolve => {
      setTimeout(resolve, duration);
  })
} 


// Open and close mobile nav
const openNav = select('.header-open-nav');
const closeNav = select('.header-close-nav');
const nav = select('nav');

onEvent('click', openNav, () => {
  nav.classList.add('visible');
  openNav.classList.add('hidden');
  closeNav.classList.remove('hidden');
})

onEvent('click', closeNav, () => {
  nav.classList.remove('visible');
  openNav.classList.remove('hidden');
  closeNav.classList.add('hidden');
})


// hero image
const heroText = select('.hero-text');
const heroTextLine = select('.hero-text h1');
const hero = select('.hero');
const content = select('.container');
let count = 0;
const heroTextArray = [
    "Hello I am Paul Funston a student studying full stack development",
    "I've always been interested in technology",
    "After exploring many other industries and doing some soul searching",
    "I decided to pursue software development with everything I've got",
]; 

onEvent('click', hero, function() {
  heroText.classList.remove('visible');

  setTimeout(() => {
    heroTextLine.innerText = heroTextArray[count];
    if (count >= heroTextArray.length) {
      hero.classList.add('hidden');
      content.classList.add('move-in');

    }
    setTimeout(() => {
      heroText.classList.add('visible');
    }, 300)
  }, 300)
    
  count++;

})





