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

function displayMembersCard(members) {
    const membersContainer = document.querySelector(".directory");
    membersContainer.innerHTML = ""; // Clear previous content

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    members.forEach((member) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const memberName = document.createElement('h2');
        memberName.textContent = member.name;

        const memberAddress = document.createElement('p');
        memberAddress.textContent = `Address: ${member.address}`;

        const memberPhoneNumber = document.createElement('p');
        memberPhoneNumber.textContent = `Phone: ${member.phone}`;

        const memebrWebsite = document.createElement('a');
        memebrWebsite.href = member.website;
        memebrWebsite.textContent =`visit our site`;
        memebrWebsite.target = "_blank";

        const memeberImage = document.createElement('img');
        memeberImage.src = member.image;
        memeberImage.alt = `${member.name} logo`;
        memeberImage.width = 100;
        memeberImage.height = 100;

        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;


        card.appendChild(memberName);
        card.appendChild(memberAddress);
        card.appendChild(memberPhoneNumber);
        card.appendChild(memebrWebsite);
        card.appendChild(membershipLevel);
        card.appendChild(memeberImage);

        cardContainer.appendChild(card);
    });

    membersContainer.appendChild(cardContainer);
}

function displayMembersList(members) {
    const membersContainer = document.querySelector(".directory");
    membersContainer.innerHTML = ""; // Clear previous content

    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');

    const listHeaders = ['Business Name', 'Address', 'Phone', 'Membership Level','Website', 'Image' ];
    const listHeaderContainer = document.createElement('div');
    listHeaderContainer.classList.add('listHeaderContainer');
    listHeaders.forEach((listheader) =>{
        const listHead = document.createElement('button');
        listHead.textContent = listheader;
        listHeaderContainer.appendChild(listHead);
    })
    listContainer.appendChild(listHeaderContainer);

    members.forEach((member) => {
        const list = document.createElement('div');
        list.classList.add('list');

        const memberName = document.createElement('h2');
        memberName.textContent = `${member.name}`;

        const memberAddress = document.createElement('p');
        memberAddress.textContent = `${member.address}`;

        const memberPhoneNumber = document.createElement('p');
        memberPhoneNumber.textContent = `${member.phone}`;

        const memebrWebsite = document.createElement('a');
        memebrWebsite.href = member.website;
        memebrWebsite.textContent =`visit our site`;
        memebrWebsite.target = "_blank";

        const memeberImage = document.createElement('img');
        memeberImage.src = member.image;
        memeberImage.alt = `${member.name} logo`;
        memeberImage.width = 50;
        memeberImage.height = 50;

        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `${member.membership_level}`;

        list.appendChild(memberName);
        list.appendChild(memberAddress);
        list.appendChild(memberPhoneNumber);
        list.appendChild(membershipLevel);
        list.appendChild(memebrWebsite);
        list.appendChild(memeberImage);

        listContainer.appendChild(list); // Append to listContainer
    });
    membersContainer.appendChild(listContainer); //append list container to members container.
}

document.addEventListener('DOMContentLoaded', ()=>{
    currentView = 'card';
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