const $pageSliderBox = document.querySelector('.page-content .testimonials .container .page-slider .box')
const $menuButton = document.querySelector('.mobile.menu-button')
const $menu = document.querySelector('.menu-popup')

// function tgl() {
//     $pageSliderBox.classList.toggle('active');
// }

// $pageSliderBox.addEventListener('click', tgl);

$menuButton.addEventListener('click', function(e) {
    $menu.classList.toggle('active');
})