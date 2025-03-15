const toggleList = document.querySelector("#toggleList");
const toggleCard = document.querySelector("#toggleCard");
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

const url = "./data/members.json";

let currentView = 'list'; // Default view

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    if (currentView === 'list') {
        displayMembersList(data);
    } else {
        displayMembersCard(data);
    }
}

function displayMembersList(members) {
    const membersContainer = document.querySelector(".directory");
    membersContainer.innerHTML = ""; // Clear previous content

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    const headers = ['Name', 'Address', 'Phone', 'Website', 'Image', 'Membership Level'];
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    // Create table rows
    members.forEach((member) => {
        const tr = document.createElement('tr');

        const memberName = document.createElement('td');
        memberName.textContent = member.name;
        tr.appendChild(memberName);

        const memberAddress = document.createElement('td');
        memberAddress.textContent = member.address;
        tr.appendChild(memberAddress);

        const memberPhoneNumber = document.createElement('td');
        memberPhoneNumber.textContent = member.phone;
        tr.appendChild(memberPhoneNumber);

        const memebrWebsite = document.createElement('td');
        const websiteLink = document.createElement('a');
        websiteLink.href = member.website;
        websiteLink.textContent = member.website;
        websiteLink.target = "_blank";
        memebrWebsite.appendChild(websiteLink);
        tr.appendChild(memebrWebsite);

        const memeberImage = document.createElement('td');
        const img = document.createElement('img');
        img.src = `images/${member.image}`;
        img.alt = `${member.name} logo`;
        img.width = 100;
        img.height = 100;
        memeberImage.appendChild(img);
        tr.appendChild(memeberImage);

        const membershipLevel = document.createElement('td');
        membershipLevel.textContent = member.membership_level;
        tr.appendChild(membershipLevel);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    membersContainer.appendChild(table);
}

function displayMembersCard(members) {
    const membersContainer = document.querySelector(".directory");
    membersContainer.innerHTML = ""; // Clear previous content

    members.forEach((member) => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        const memberName = document.createElement('h2');
        memberName.textContent = member.name;

        const memberAddress = document.createElement('p');
        memberAddress.textContent = `Address: ${member.address}`;

        const memberPhoneNumber = document.createElement('p');
        memberPhoneNumber.textContent = `Phone: ${member.phone}`;

        const memebrWebsite = document.createElement('a');
        memebrWebsite.href = member.website;
        memebrWebsite.textContent = member.website;
        memebrWebsite.target = "_blank";

        const memeberImage = document.createElement('img');
        memeberImage.src = `images/${member.image}`;
        memeberImage.alt = `${member.name} logo`;
        memeberImage.width = 100;
        memeberImage.height = 100;

        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;

        card.appendChild(memberName);
        card.appendChild(memberAddress);
        card.appendChild(memberPhoneNumber);
        card.appendChild(memebrWebsite);
        card.appendChild(memeberImage);
        card.appendChild(membershipLevel);

        membersContainer.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', () =>{
    currentView = 'list';
    getMembers();
})

toggleList.addEventListener('click', () => {
    currentView = 'list';
    getMembers();
});

toggleCard.addEventListener('click', () => {
    currentView = 'card';
    getMembers();
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

getMembers();

const getYear = document.querySelector('#year');
const getlastModified = document.querySelector("#lastModified");

const getCurrentYear = new Date().getFullYear();
getYear.textContent = `© all rights reserved ${getCurrentYear}.`;

const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
getlastModified.textContent = `Last modified: ${lastModifiedDate.toLocaleDateString('en-US', options)}`;