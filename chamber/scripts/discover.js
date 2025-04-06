import { discoverData } from "../data/discover.mjs";

function discoverGallery() {
  console.log(discoverData);
  buildGallery(discoverData);
}

function buildGallery(responses) {
  const galleryContainer = document.querySelector(".galleryContainer");

  responses.forEach((response) => {
    const galleryCard = document.createElement("div");
    galleryCard.classList.add("galleryCard");

    const galleryHead = document.createElement("h2");
    galleryHead.textContent = response.name;

    const galleryFigure = document.createElement("figure");

    const galleryImg = document.createElement("img");
    galleryImg.setAttribute("src", response.discoverImg);
    galleryImg.setAttribute("alt", "gallery image loading");

    galleryFigure.appendChild(galleryImg);

    const galleryAddress = document.createElement("address");
    galleryAddress.textContent = response.address;

    const galleryParagraph = document.createElement("p");
    galleryParagraph.textContent = response.description;

    const galleryButton = document.createElement("button");
    galleryButton.textContent = "Learn More";

    galleryCard.appendChild(galleryFigure);
    galleryCard.appendChild(galleryHead);
    galleryCard.appendChild(galleryAddress);
    galleryCard.appendChild(galleryParagraph);
    galleryCard.appendChild(galleryButton);

    galleryContainer.appendChild(galleryCard);
  });
}
discoverGallery();

function displayWelcomeMessage() {
  let message;
  const messageContainer = document.querySelector(".localSotrage");
  let clientLastVisit = new Date(localStorage.getItem("clientLastVisit"));
  let dateVisited = new Date();

  if (!clientLastVisit.getTime()) {
    localStorage.setItem("clientLastVisit", dateVisited);
    message = document.createElement("h3");
    message.textContent = "Welcome! Let us know if you have any questions.";
    messageContainer.appendChild(message);
    return;
  }

  const timeDiff = dateVisited - clientLastVisit;
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  if (daysDiff < 1) {
    message = document.createElement("h3");
    message.textContent = "Back so soon! Awesome!";
    messageContainer.appendChild(message);
  } else {
    message = document.createElement("h3");
    if (daysDiff === 1) {
      message.textContent = "You last visited 1 day ago.";
    } else {
      message.textContent = `You last visited ${daysDiff} days ago.`;
    }
    messageContainer.appendChild(message);
  }

  localStorage.setItem("clientLastVisit", dateVisited);
}

displayWelcomeMessage();
