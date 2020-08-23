
/*===========================================*/
/*===========================================*/
const $burger = $('.menu-burger');
const $headerMenu = $('.menu');
const $body = $('body');
const $header = $(".header");
$burger.on('click', openMenuBurger)
function openMenuBurger(){
	$header.toggleClass('active')
	$body.toggleClass('lock')
	$burger.toggleClass('active')
	$headerMenu.toggleClass('active')
}
/*===========================================*/
/*===========================================*/