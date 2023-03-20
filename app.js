"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", showCharacter);

function initApp() {
  // Harry Potter
  const potterName = "Harry Potter";
  const potterGender = "male";
  const potterHouse = "Gryffindor";
  const potterDateOfBirth = "31-07-1980";
  const potterAncestry = "half-blood";
  const potterEyeColour = "green";
  const potterHairColour = "black";
  const potterActor = "Daniel Radcliffe";
  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  console.log(potterName, potterGender, potterHouse, potterDateOfBirth, potterAncestry, potterEyeColour, potterHairColour, potterActor, potterImage);
}

function showCharacter() {
  showCharacter(potterImage, potterName, potterHouse, potterDateOfBirth, potterActor);

  const article = document.createElement("article");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
}

console.log(showCharacter);

const newParagraph = document.createElement("p");
