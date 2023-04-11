(function () {
    "use strict";

    function toggleMenu() {
        let el = document.querySelector('.main-nav');
        el.classList.toggle('show');
    }
    
    let menu = document.querySelectorAll('.menu-btn');
    for (let item of menu) {
        item.addEventListener('click', toggleMenu);
    }
    
})();
