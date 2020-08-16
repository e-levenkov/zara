import './components/slider';
import { Filters } from './components/filter';
import { MenuAnimation } from './components/menuAnimation';
import { ChangeWord } from './components/changeWordAnimation';
import { CreateNewChoice } from './components/dropDownSleect';
import { Gallery } from './components/gallery';

document.addEventListener('DOMContentLoaded', function () {
    let header__menu = document.querySelector('.header__menu');
    let menuBtn = document.querySelector('.menuBtn');
    let mainMenu = document.querySelector('.mainMenu');

    header__menu.addEventListener('click', () => {
        menuBtn.classList.toggle('act');
        ChangeWord();
        if (menuBtn.classList.contains('act')) {
            mainMenu.classList.add('act');
        } else {
            mainMenu.classList.remove('act');
        }
    });

    Filters();
    MenuAnimation();
    CreateNewChoice();
    Gallery();
});
