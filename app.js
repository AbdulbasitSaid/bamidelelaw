let app = document.querySelector('.app');
let toggleBtn = document.querySelector('.nav-btn');
let sideNav = document.querySelector('.side-nav');
let closeBtn = document.querySelector('.close-nav');
let loader = document.querySelector('.loader3');
let navbar = document.querySelector('.navbar');

app.classList.add('hide');
sideNav.classList.add('hide');
setTimeout(() => {
    loader.classList.add('hide');
    app.classList.remove('hide');
    sideNav.classList.remove('hide');

}, 1500);


toggleBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    app.classList.toggle('show-nav');
    sideNav.classList.toggle('show');
});
closeBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    document.querySelector('.app').classList.toggle('show-nav');
});

