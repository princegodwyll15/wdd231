//declare a url to get the json format of prophet details
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");
const header = document.querySelector('header');
const filtercontainer = document.querySelector('.filtercontainer');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets);
    filterProphets(data.prophets);
}

const displayProphets = (prophets) => {
    cards.innerHTML = ""; // Clear previous cards
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullname = document.createElement("h2");
        const portrait = document.createElement("img");

        fullname.textContent = `Name of prophet: ${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of: ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', "300");
        portrait.setAttribute('height', '350');

        card.appendChild(fullname);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

const filterProphets = (prophets) => {
    let filterOptions = ['No filter','Utah', 'Born out of USA', '95 years plus', 'Have 10 or more children', 'Served at least 15 years'];
    filterOptions.forEach((option) => {
        const filterButton = document.createElement('button');
        filterButton.textContent = option;
        filterButton.addEventListener('click', () => applyFilter(option, prophets));
        filtercontainer.appendChild(filterButton);
    });
}

const applyFilter = (option, prophets) => {
    let filteredProphets;
    switch (option) {
        case 'Utah':
            filteredProphets = prophets.filter(prophet => prophet.birthplace.includes('Utah'));
            break;
        case 'Born out of USA':
            filteredProphets = prophets.filter(prophet => prophet.birthplace === "England");
            break;
        case '95 years plus':
            filteredProphets = prophets.filter(prophet => {
                const birthYear = parseInt(prophet.birthdate.split(' ')[2]);
                const currentYear = new Date().getFullYear();
                return (currentYear - birthYear) >= 95;
            });
            break;
        case 'Have 10 or more children':
            filteredProphets = prophets.filter(prophet => prophet.numofchildren >= 10);
            break;
        case 'Served at least 15 years':
            filteredProphets = prophets.filter(prophet => prophet.length >= 15);
            break;
        case 'No filter':
            filteredProphets = prophets;
            break;
        default:
            return;
    }
    displayProphets(filteredProphets);
}

getProphetData();