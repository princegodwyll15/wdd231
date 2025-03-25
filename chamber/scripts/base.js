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



// Select all sections
const sections = document.querySelectorAll('section');

// Function to check if a section is in the viewport
function handleScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        // Add 'visible' class if the section is in the viewport
        if (sectionTop < viewportHeight && sectionBottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Trigger the function on page load
handleScroll();