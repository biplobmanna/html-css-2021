const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('btn-exit');

mobileBtn.addEventListener('click',() => {
    nav.classList.add('menu-btn');
});
mobileBtnExit.addEventListener('click',() => {
    console.log('mobileBtnExit clicked!');
    nav.classList.remove('menu-btn');
});

// console.log(mobileBtnExit);