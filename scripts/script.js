const year =document.getElementById('year');
const lastModified = document.getElementById("lastModified");

const currentDate = new Date();
const getYear = currentDate.getFullYear();
const getLastModified = new Date(document.lastModified).toLocaleString();

year.textContent = `🧑‍💻👨‍💻 ©${getYear} Prince Godwyll 🧑‍💻👨‍💻, Ghana.`;
lastModified.textContent = `Last Update: ${getLastModified}`;
