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
let count = 0;
const heroTextArray = [
    "line 1",
    "line 2",
    "line 3",
    "line 4",
]; 

onEvent('click', hero, function() {
  heroText.classList.add('visible');
  
  if (count >= heroTextArray.length)
    count = 0;

  heroTextLine.innerText = heroTextArray[count];
  count++;

})





