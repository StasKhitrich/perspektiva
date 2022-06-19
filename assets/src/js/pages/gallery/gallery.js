import 'SCSS/pages/gallery/gallery.scss';

jQuery(window).on('load', function() {
	jQuery('.section-gallery__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.section-gallery__slider-nav',
	});

	jQuery('.section-gallery__slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		adaptiveHeight: true,
		asNavFor: '.section-gallery__slider',
	});
})