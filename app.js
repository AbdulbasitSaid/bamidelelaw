let app = document.querySelector('.app');
let toggleBtn = document.querySelector('.nav-btn')
let sideNav = document.querySelector('.side-nav')
let closeBtn = document.querySelector('.close-nav')
let loader = document.querySelector('.loader3')
let navbar = document.querySelector('.navbar')
//
let navItems = document.getElementById('nav-items')
let navlinks = document.querySelectorAll('a')

Array.from(navlinks).forEach(item => {
    item.addEventListener('click', () => {
        let selected = document.getElementsByClassName('current')
        selected[0].className = selected[0].className.replace('current', '')
        item.className += 'current'
    })
})

app.classList.add('hide');
sideNav.classList.add('hide')
navbar.classList.add('hide')

setTimeout(() => {
    loader.classList.add('hide');
    app.classList.remove('hide');
    sideNav.classList.remove('hide');
    navbar.classList.remove('hide');
}, 1500);


toggleBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    app.classList.toggle('show-nav');
    navbar.classList.toggle('show-nav');
    sideNav.classList.toggle('show')

});
closeBtn.addEventListener('click', (e) => {
    app.classList.toggle('show-nav');
    navbar.classList.toggle('show-nav');
    sideNav.classList.toggle('show')
});

