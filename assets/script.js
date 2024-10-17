const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const leftArrow = document.querySelector('#arrow-left');
const rightArrow = document.querySelector('#arrow-right');
const bannerImg = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('#banner-tagline');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

function createDots() {
	slides.forEach((slide, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (index === 0) dot.classList.add('active');
		dotsContainer.appendChild(dot);
		dot.addEventListener('click', () => {
			currentSlide = index;
			updateSlide();
		});
	});
}

function updateSlide() {
	bannerImg.src = slides[currentSlide].image;
	bannerTagLine.innerHTML = slides[currentSlide].tagLine;

	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		dot.classList.remove('active');
		if (index === currentSlide) {
			dot.classList.add('active');
		}
	});
}

leftArrow.addEventListener('click', function () {
	currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
	updateSlide();
});

rightArrow.addEventListener('click', function () {
	currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
	updateSlide();
});

createDots();
updateSlide();
