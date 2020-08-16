let menuItems = document.querySelectorAll('.mainMenu__item-link');
let items = document.querySelectorAll('.mainMenu__item');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function MenuAnimation(){
    menuItems.forEach((item, index) => {
        let margin = getRandomInt(5, 20);
        let fill = document.createElement('span');
        fill.innerHTML = `${item.innerHTML}`;
        fill.classList.add('fill');
        item.appendChild(fill);
    
        items[index].style = `margin-right:${margin}%`;
    });
}
export {MenuAnimation};