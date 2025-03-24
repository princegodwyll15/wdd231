const toggleList = document.querySelector("#toggleList");
const toggleCard = document.querySelector("#toggleCard");
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const getYear = document.querySelector('#year');
const getlastModified = document.querySelector("#lastModified");

const getCurrentYear = new Date().getFullYear();
getYear.textContent = `© all rights reserved ${getCurrentYear}.`;

const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
getlastModified.textContent = `Last modified: ${lastModifiedDate.toLocaleDateString('en-US', options)}`;