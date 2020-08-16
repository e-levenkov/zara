import jquery from 'jquery';
window.$ = window.jQuery = jquery;

function Filters() {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link');

        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        var $this = $(this);
        var $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('js-open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('js-open');
        }
    };

    new Accordion($('#js-accordion'), false);

    let filters = document.querySelectorAll('.filter');
    let addSelectionPoint = (opt, slctFld, input) => {
        let optionSource = opt.querySelector('p').innerHTML;
        if (input.checked) {
            let arrayOptions = slctFld.innerHTML.split(',');

            arrayOptions.splice(arrayOptions.indexOf(optionSource), 1);
            arrayOptions = arrayOptions.join();
            arrayOptions.length == 0
                ? (slctFld.innerHTML = 'Any')
                : (slctFld.innerHTML = arrayOptions);
        } else {
            if (slctFld.innerHTML == 'Any') {
                slctFld.innerHTML = '';
                slctFld.innerHTML += optionSource;
            }
            else slctFld.innerHTML += ',' + optionSource;
        }
    };

    filters.forEach((filter) => {
        let options = filter.querySelectorAll('.filter__option');
        let inputs = filter.querySelectorAll('input');
        let selectedField = filter.querySelector('.filter__selected');

        filter.addEventListener('click', ()=>{
            filter.querySelector('.filter__state_plus').classList.toggle('d-none');
            filter.querySelector('.filter__state_minus').classList.toggle('d-none');
        });

        options.forEach((option, index) => {
            option.addEventListener('click', () => {
                addSelectionPoint(option, selectedField, inputs[index]);
            });
        });
    });
}

export { Filters };
