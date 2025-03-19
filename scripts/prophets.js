// API URL to fetch prophet details
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");
const filtercontainer = document.querySelector(".filtercontainer");

// Fetch data from the API
async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch prophet data.");
        
        const data = await response.json();
        displayProphets(data.prophets);
        filterProphets(data.prophets);
    } catch (error) {
        console.error("Error fetching prophets:", error);
    }
}

// Function to display all prophets with **all key-value pairs**
const displayProphets = (prophets) => {
    cards.innerHTML = ""; // Clear previous cards
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullname = document.createElement("h2");
        const details = document.createElement("p");
        const portrait = document.createElement("img");

        fullname.textContent = `${prophet.name} ${prophet.lastname}`;
        
        details.innerHTML = `
            <strong>Birthdate:</strong> ${prophet.birthdate} <br>
            <strong>Birthplace:</strong> ${prophet.birthplace} <br>
            <strong>Number of Children:</strong> ${prophet.numofchildren} <br>
            <strong>Years Served:</strong> ${prophet.length} years
        `;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "300");
        portrait.setAttribute("height", "350");

        card.appendChild(fullname);
        card.appendChild(details);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
};

// Function to create filter buttons
const filterProphets = (prophets) => {
    filtercontainer.innerHTML = ""; // Clear previous filters

    let filterOptions = [
        "No filter",
        "Utah",
        "Born out of USA",
        "95 years plus",
        "Have 10 or more children",
        "Served at least 15 years"
    ];

    filterOptions.forEach((option) => {
        const filterButton = document.createElement("button");
        filterButton.textContent = option;
        filterButton.addEventListener("click", () => applyFilter(option, prophets));
        filtercontainer.appendChild(filterButton);
    });
};

// Function to apply filters
const applyFilter = (option, prophets) => {
    let filteredProphets;
    switch (option) {
        case "Utah":
            filteredProphets = prophets.filter(prophet => prophet.birthplace.includes("Utah"));
            break;
        case "Born out of USA":
            filteredProphets = prophets.filter(prophet => prophet.birthplace === "England");
            break;
        case "95 years plus":
            filteredProphets = prophets.filter(prophet => {
                const birthYear = parseInt(prophet.birthdate.split(" ").pop());
                const currentYear = new Date().getFullYear();
                return (currentYear - birthYear) >= 95;
            });
            break;
        case "Have 10 or more children":
            filteredProphets = prophets.filter(prophet => prophet.numofchildren >= 10);
            break;
        case "Served at least 15 years":
            filteredProphets = prophets.filter(prophet => prophet.length >= 15);
            break;
        case "No filter":
            filteredProphets = prophets;
            break;
        default:
            return;
    }
    displayProphets(filteredProphets);
};

// Fetch and display data
getProphetData();
