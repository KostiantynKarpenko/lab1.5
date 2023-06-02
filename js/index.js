const $pageSliderBox = document.querySelector('.page-content .testimonials .container .page-slider .box')

function tgl() {
    $pageSliderBox.classList.toggle('active');
}

$pageSliderBox.addEventListener('click', tgl);