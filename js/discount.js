"use strict"

const iconMenu = document.querySelector('.nav__icon');
const navigation = document.querySelector('.header__navigation');

if (iconMenu) {
	iconMenu.addEventListener('click', function () {
		document.body.classList.toggle('__loc');
		navigation.classList.toggle('__active');
		iconMenu.classList.toggle('__active');
	})
}