let app = document.getElementById('app');
let toggleBtn = document.querySelector('.btn');

document.getElementById('app').addEventListener('click', (e) => {
    // e.preventDefault();
    document.querySelector('.app').classList.toggle('show-nav');
});