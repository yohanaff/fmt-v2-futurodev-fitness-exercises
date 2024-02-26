document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.getElementById('navbar');

    hamburgerMenu.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    let userName = document.getElementById('user-name');
    if (!userName.innerHTML.trim()) {
        userName.innerHTML = 'Username';
    }

    let userPhoto = document.querySelector('#user-profile img');
    userPhoto.addEventListener('click', function () {
        alert('Hello, ' + userName.innerHTML + '!');
    });

    const themeToggle = document.getElementById('theme-toggler');
    themeToggle.addEventListener('change', function () {
        document.body.setAttribute('data-theme', this.checked ? 'dark' : 'light');
    });
});
