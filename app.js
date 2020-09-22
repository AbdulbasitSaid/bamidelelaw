let app = document.querySelector('.app');
let toggleBtn = document.querySelector('.nav-btn');
let sideNav = document.querySelector('.side-nav');
let closeBtn = document.querySelector('.close-nav');

toggleBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    app.classList.toggle('show-nav');
    sideNav.classList.toggle('show');
});
closeBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    document.querySelector('.app').classList.toggle('show-nav');
});