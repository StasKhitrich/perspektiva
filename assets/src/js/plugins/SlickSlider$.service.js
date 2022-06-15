/**
 * @var slider: ISlider;
 *
 * interface ISlider {
 *     selector: string
 *     options?: object
 * }
 * */

export default class SlickSliderService {

    static options = {
        dots: false,
        arrows: false,
        infinite: false,
        draggable: false,
        swipe: false,
        adaptiveHeight: false,
        speed: 320,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
    };

    slider;

    constructor(slider) {
        if (jQuery.fn.slick && slider['selector']) {
            this.slider = slider;
            this.initSlickSlider();
        } else throw new Error('Slick Slider => Не подключен плагин jQuery.slick');
    }

    initSlickSlider() {
        const el = jQuery(this.slider.selector);
        if (el.length) {
            this.slider = jQuery(this.slider.selector).slick({
                ...SlickSliderService.options,
                ...this.slider.options ? this.slider.options : {}
            });
        } else throw new Error('Slick Slider => не найден селектор слайдера');
    }
}