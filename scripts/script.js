import { courses } from "./courses.js";

let coursesContainer; // Declare globally
let totalCredits; // Declare globally

function createCourseItem() {
  const certificateContainer = document.querySelector(".certifications");

  const sectionHead = document.createElement("h2");
  sectionHead.textContent = "Web and Computer Programming Certificates";
  certificateContainer.appendChild(sectionHead);

  const certificateCategories = document.createElement("div");
  certificateCategories.classList.add("certificate-categories");
  const courseFilter = ["All", "WDD", "CSE", "Taken"];

  courseFilter.forEach((content) => {
    const filterButton = document.createElement("button");
    filterButton.textContent = content;

    filterButton.addEventListener("click", () => filterCourses(content));
    certificateCategories.appendChild(filterButton);
  });
  certificateContainer.appendChild(certificateCategories);

  coursesContainer = document.createElement("div");
  coursesContainer.classList.add("courses");
  certificateContainer.appendChild(coursesContainer);

  totalCredits = document.createElement("h3");
  certificateContainer.appendChild(totalCredits);

  filterCourses("All"); // Initialize with all courses
}

function filterCourses(category) {
  coursesContainer.innerHTML = ""; // Clear previous courses
  let filteredCourses;
  if (category === "All") {
    filteredCourses = courses;
  } else if (category === "Taken") {
    filteredCourses = courses.filter((course) => course.completed);
  } else {
    filteredCourses = courses.filter((course) => course.subject === category);
  }

  filteredCourses.forEach((course) => {
    const courseItem = document.createElement("button");
    courseItem.textContent = `${course.subject} ${course.number}`;
    coursesContainer.appendChild(courseItem);

    // Add dialog box functionality for each course
    courseItem.addEventListener("click", () => addDialogBox(course));
  });

  const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCredits.textContent = `Total Credits = ${total}`;
}

function addDialogBox(course) {
  const dialogBox = document.querySelector("#dialogBox");
  dialogBox.innerHTML = ""; 

  dialogBox.innerHTML = `
    <button id="closeButton">X</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Description:</strong> ${course.description}</p>
    <p><strong>Certificates:</strong> ${course.certificate}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
  `;

  const closeButton = dialogBox.querySelector("#closeButton");
  closeButton.addEventListener("click", () => {
    dialogBox.close();
  });

  dialogBox.showModal(); 
}

createCourseItem();

// Footer content
const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
});

const currentDate = new Date();
const getYear = currentDate.getFullYear();
const getLastModified = new Date(document.lastModified).toLocaleString();

year.textContent = `👨‍💻 ©${getYear} Prince Godwyll 🧑‍💻, Ghana.`;
lastModified.textContent = `Last Updated: ${getLastModified}`;