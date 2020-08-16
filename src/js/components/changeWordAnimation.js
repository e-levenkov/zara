function pushLetter(letter) {
    document.querySelector('.header__menu-title').innerHTML += letter;
}

function ChangeWord() {
    let text = document.querySelector('.header__menu-title').innerHTML;
    document.querySelector('.header__menu-title').innerHTML = '';
    let data = {
        menu: ['M', 'e', 'n', 'u'],
        close: ['C', 'l', 'o', 's', 'e'],
    };
    if (text == 'Menu') {
        data.close.forEach((item, index) => {
            setTimeout(pushLetter, index * 100, item);
        });
    } else if (text == 'Close') {
        data.menu.forEach((item, index) => {
            setTimeout(pushLetter, index * 100, item);
        });
    }
}

export { ChangeWord };
