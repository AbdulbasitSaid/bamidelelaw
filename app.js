let app = document.querySelector('.app');
let toggleBtn = document.querySelector('.nav-btn')
let sideNav = document.querySelector('.side-nav')
let closeBtn = document.querySelector('.close-nav')
let loader = document.querySelector('.loader3')
let navbar = document.querySelector('.navbar')
//
let navItems = document.getElementById('nav-items')
let navlinks = navItems.getElementsByClassName('link')


for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', () => {
        let current = document.getElementsByClassName('current')
        console.log(current)
        console.log('greater')
        current[0].className = current[0].className.replace('current', ' ')
        this.className += 'current'
    })
}

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

