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




