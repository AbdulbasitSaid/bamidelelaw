let app = document.getElementById('app');
let toggleBtn = document.querySelector('.btn');

document.querySelector('.nav-btn').addEventListener('click', (e) => {
    // e.preventDefault();
    document.querySelector('.app').classList.toggle('show-nav');
});
document.querySelector('.close-nav').addEventListener('click', (e) => {
    // e.preventDefault();
    document.querySelector('.app').classList.toggle('show-nav');
});