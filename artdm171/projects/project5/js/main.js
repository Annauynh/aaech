(function () {
    "use strict";

    //This function simply toggles the existence of 
    //the "show" class on the main navigation. CSS transitions do the rest.
    function toggleMenu() {
        let el = document.querySelector('.main-nav');
        el.classList.toggle('show');
    }

    //there are two buttons that open/close the menu, both classed as .menu-btn
    //find all of them and add the interactivity to each button.
    let menu = document.querySelectorAll('.menu-btn');
    for (let item of menu) {
        item.addEventListener('click', toggleMenu);
    }
    
})();

