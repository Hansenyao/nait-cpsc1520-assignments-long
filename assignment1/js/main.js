// JS file for CPSC 1520 Assignment 1: Album Creator
// Student Name: Youfang Yao
// Student ID: 200582794
// Date: 2024-10-18

// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function
/*
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE"/>
      <div class="card-body">
        <h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
        <p class="card-text">ALBUM TITLE HERE</p>
      </div>
    </div>
  </div>
*/

// Set focus on title input element
document.querySelector("#album-title-input").focus();

// Get album form handle
let albumForm = document.querySelector("#album-form");

// Add listener to the form
albumForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get inputs
  let titleElem = event.target.elements["album-title"];
  let descriptionElem = event.target.elements["album-description"];
  let artElem = event.target.elements["album-art"];
  let title = titleElem.value.trim();
  let description = descriptionElem.value.trim();
  let art = artElem.options[artElem.selectedIndex].value;

  // Validation
  if (isInputsValid(titleElem, descriptionElem, artElem)) {
    addAlbumCard(title, description, art);
    titleElem.value = "";
    descriptionElem.value = "";
    artElem.selectedIndex = 0;
    titleElem.focus();
  }
});

// Validate inputs when the user types anything 
albumForm.addEventListener("input", () => {
  let titleElem = albumForm.elements["album-title"];
  let descriptionElem = albumForm.elements["album-description"];
  let artElem = albumForm.elements["album-art"];
  isInputsValid(titleElem, descriptionElem, artElem);
})

// Validate inputs when the select changes 
albumForm.addEventListener("change", () => {
  let titleElem = albumForm.elements["album-title"];
  let descriptionElem = albumForm.elements["album-description"];
  let artElem = albumForm.elements["album-art"];
  isInputsValid(titleElem, descriptionElem, artElem);
})

/**
 * Add an album card
 *
 * @param {string} title - The title string of the new album item.
 * @param {string} description - The description string of the new album item.
 * @param {string} art - The art image path of the new album item.
 * @returns {void}
 */
const addAlbumCard = (title, description, art) => {
  let albumItemList = document.querySelector("#all-albums-list")
  let newAlbumItem = `<div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="img/${art}"/>
      <div class="card-body">
        <h5 class="card-title">${description}</h5>
        <p class="card-text">${title}</p>
      </div>
    </div>
  </div>`
  let innerHTML = albumItemList.innerHTML;
  albumItemList.innerHTML = newAlbumItem + innerHTML;
}


// The overall validation function

/**
 * The overall validation function, validate all input elemets
 *
 * @param {object} titleElem - The album title element handle.
 * @param {object} descriptionElem - The album description element handle.
 * @param {object} artElem - The album art element handle.
 * @returns {void}
 */
const isInputsValid = (titleElem, descriptionElem, artElem) => {

  let isValid = true;

  // Validate title
  if (!isAlbumTitleValid(titleElem)) {
    isValid = false;
  }

  // Validate description
  if (!isAlbumDescriptionValid(descriptionElem)) {
    isValid = false;
  }

  // Validate art
  if (!isAlbumArtValid(artElem)) {
    isValid = false;
  }

  return isValid;
}


// Validate title: The title needs to be between 0 and 60 characters in length.
const isAlbumTitleValid = (elem) => {
  let title = elem.value.trim();
  if (title == "" || title.length > 60) {
    elem.classList.add("is-invalid");
    return false;
  }
  else {
    elem.classList.remove("is-invalid");
    return true;
  }
}

// Validate description: The description needs to be between 0 and 255 characters in length.
const isAlbumDescriptionValid = (elem) => {
  let description = elem.value.trim()
  if (description == "" || description.length > 255) {
    elem.classList.add("is-invalid");
    return false;
  }
  else {
    elem.classList.remove("is-invalid");
    return true;
  }
}

// Validate description: The description needs to be between 0 and 255 characters in length.
const isAlbumArtValid = (elem) => {
  let selected = elem.selectedIndex;
  if (selected == 0) {
    elem.classList.add("is-invalid");
    return false;
  }
  else {
    elem.classList.remove("is-invalid");
    return true;
  }
}
