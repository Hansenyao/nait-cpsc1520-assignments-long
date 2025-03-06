/*
HTML for table rows.
<tr>
  <td>ALBUM NAME HERE</td>
  <td>RELEASE DATE HERE</td>
  <td>ARTIST NAME HERE</td>
  <td>GENRE HERE</td>
  <td>AVERAGE RATING HERE</td>
  <td>NUMBER OF RATINGS HERE</td>
</tr>
*/

/*
Import bootstrap then your css below
*/
import 'bootstrap/dist/css/bootstrap.min.css' 
import '../css/cover.css'

// Javascript imports below

// For Bonus part (do not remove)
let searchedAlbums = []


// your code below here.

// part 1: navigation
let tabNavigator = document.querySelector("#album-tab-navigation")
let searchAlbumTab = document.querySelector("#search-album-tab")
let myAlbumsTab = document.querySelector("#my-albums-tab")

tabNavigator.addEventListener("click", (evt) => {
  let tabName = evt.target.textContent;

  if (tabName == "Search Albums") {
    searchAlbumTab.classList.add("active");
    searchAlbumTab.classList.remove("d-none");
    myAlbumsTab.classList.remove("active");
    myAlbumsTab.classList.add("d-none");
  }
  else if (tabName == "My Albums") {
    myAlbumsTab.classList.add("active");
    myAlbumsTab.classList.remove("d-none");
    searchAlbumTab.classList.remove("active");
    searchAlbumTab.classList.add("d-none");
  }

})

// part 2: search albums
import { searchAlbum } from "./api/albums.js"
import { saveToMyAlbums } from "./api/albums.js"
import { getMyAlbums } from "./api/albums.js"
import { addAlbumToList } from './dom/albumElements.js'
document.querySelector("#search-album-form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  // Search albums from backend
  let searchInput = document.querySelector("#query-input").value;
  searchedAlbums = searchAlbum(searchInput);

  // Remove old items
  let albumList = document.querySelector("#searched-albums-list");
  while (albumList.firstChild) {
    albumList.removeChild(albumList.lastChild);
  }

  // Add elements to the list
  searchedAlbums.forEach((album, index) => {
    addAlbumToList(albumList, album, index, true);
  });
})

// part 3: add albums to my albums
document.querySelector("#searched-albums-list").addEventListener("click", (evt) => {
  if (evt.target.classList.contains("my-album-button")) {
    // Get the selected album index
    let btnNode = evt.target;
    let liNode = btnNode.parentNode;
    let listNode = liNode.parentNode;
    let index = parseInt(liNode.getAttribute("index"));
    let selectedAlbum = searchedAlbums[index];

    // Remove it from searched albums
    listNode.removeChild(liNode);

    // Add it to “my- albums”
    let myAlbumsList = document.querySelector("#my-albums");
    addAlbumToList(myAlbumsList, selectedAlbum, index, false);

    // Part Bonus: Save the selected album to server
    saveToMyAlbums(selectedAlbum);
  }
})


// bonus part
const renderMyAlbums = () => {
  let myAlbumsList = document.querySelector("#my-albums");
  let myAlbums = getMyAlbums();
  myAlbums.forEach((album, index) => {
    addAlbumToList(myAlbumsList, album, index, false);
  });
}
// render the saved myAlbums items when page is loaded
renderMyAlbums();
