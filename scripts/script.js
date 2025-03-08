const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

function createCourseItem() {
  const certificateContainer = document.querySelector(".certifications");

  const sectionHead = document.createElement("h2");
  sectionHead.textContent = "Web and Computer Programming Certificates";
  certificateContainer.appendChild(sectionHead);

  const certificateCategories = document.createElement('div');
  certificateCategories.classList.add('certificate-categories');
  const courseFilter = ["All", "WDD", "CSE", "Taken"];

  courseFilter.forEach(content => {
    const filterButton = document.createElement("button");
    filterButton.textContent = content;

    filterButton.addEventListener("click", () => filterCourses(content));
    certificateCategories.appendChild(filterButton);
  });
  certificateContainer.appendChild(certificateCategories);

  const coursesContainer = document.createElement('div');
  coursesContainer.classList.add('courses');
  certificateContainer.appendChild(coursesContainer);

  const totalCredits = document.createElement('h3');
  certificateContainer.appendChild(totalCredits);

  function filterCourses(category) {
    coursesContainer.innerHTML = ""; // Clear previous courses
    let filteredCourses;
    if (category === "All") {
      filteredCourses = courses;
    } else if (category === "Taken") {
      filteredCourses = courses.filter(course => course.completed);
    } else {
      filteredCourses = courses.filter(course => course.subject === category);
    }
    filteredCourses.forEach((course) => {
      const courseItem = document.createElement("button");
      courseItem.textContent = `${course.subject} ${course.number}`;
      coursesContainer.appendChild(courseItem);
    });

    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = `Total Credits = ${total}`;
  }
  // Initially display all courses
  filterCourses("All");
}

createCourseItem();

//footer content
const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
//hamburger
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