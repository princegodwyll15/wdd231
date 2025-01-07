const year =document.getElementById('year');
const lastModified = document.getElementById("lastModified");
//hamburger 
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');

});

const currentDate = new Date();
const getYear = currentDate.getFullYear();
const getLastModified = new Date(document.lastModified).toLocaleString();

year.textContent = `🧑‍💻👨‍💻 ©${getYear} Prince Godwyll 🧑‍💻👨‍💻, Ghana.`;
lastModified.textContent = `Last Update: ${getLastModified}`;
