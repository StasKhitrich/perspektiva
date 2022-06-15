/**
 * @var inputs: JQuery inputs list;
 * @var options: {
 *     mask: string,
 *     [prop: string]: any
 * }
 * */

export default class MaskPhoneService {

    $inputs;
    options;

    constructor($inputs, options = {
        mask: '+7 Z00 000 00 00',
        translation: {
            'Z': {
                pattern: /[345689]/
            }
        }
    }) {
        if (jQuery.fn.mask && $inputs) {
            this.$inputs = $inputs;
            this.options = options;
            this.initMaskPhone();
        } else {
            throw new Error('Не подключен плагин jQuery.mask или не прислан селектор input');
        }
    }

    initMaskPhone() {
        this.$inputs.mask(this.options.mask, this.options.translation);
    }
}