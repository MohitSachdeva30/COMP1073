// js/gallery.js

document.addEventListener('DOMContentLoaded', function() {
	const featured = document.getElementById('featured');
	const figcaption = document.querySelector('figcaption');
	const thumbnails = document.getElementById('thumbnails').getElementsByTagName('img');
	const images = [
		{ large: 'images/flowers-pink-large.jpg', small: 'images/flowers-pink-small.jpg', alt: 'Pink Flowers' },
		{ large: 'images/flowers-purple-large.jpg', small: 'images/flowers-purple-small.jpg', alt: 'Purple Flowers' },
		{ large: 'images/flowers-red-large.jpg', small: 'images/flowers-red-small.jpg', alt: 'Red Flowers' },
		{ large: 'images/flowers-white-large.jpg', small: 'images/flowers-white-small.jpg', alt: 'White Flowers' },
		{ large: 'images/flowers-yellow-large.jpg', small: 'images/flowers-yellow-small.jpg', alt: 'Yellow Flowers' },
	];

	function changeFeatured(image) {
		featured.src = image.large;
		featured.alt = image.alt;
		figcaption.textContent = image.alt;
	}

	for (let i = 0; i < thumbnails.length; i++) {
		thumbnails[i].addEventListener('click', function() {
			changeFeatured(images[i]);
		});
	}
});
