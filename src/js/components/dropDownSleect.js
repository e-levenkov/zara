import Choices from 'choices.js';
function CreateNewChoice() {
    new Choices('.js-select', {
        searchEnabled: false,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'asdsadas',
        classNames: {
            containerOuter: 'choices select-choices',
        },
    });
}

export { CreateNewChoice };
