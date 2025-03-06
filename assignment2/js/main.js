// Assignment 2 - Fetch & Arrays
// Youfang Yao
// Nov 25, 2024
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
  NOTE: do not delete topAlbums, you'll need to reassign this
  when you fetch the data locally.
*/
let topAlbums = []
let topAlbumsFiltered = []

// your code below here.

// Part 1: Create a function to get the album data from our local server.
const loadAlbumsDataByFetch = (url) => {
    fetch(url).then((response) => {
        response.json()
            .then((data) => {
                // In default, topAlbumsFiltered has the same albums as topAlbums.
                topAlbums = data;
                topAlbumsFiltered = topAlbums;
                renderFilteredAlbums();
            })
            .catch((error) => {
                console.log(`Failed to load data, error: ${error}`);
            })
    })
}
// Part 1: Render the Albums on the page.
const renderFilteredAlbums = () => {
    let albumsRows = document.querySelector("#album-rows");
    albumsRows.innerHTML = "";
    
    let dispalyArray = createDisplayAlbumArray(topAlbumsFiltered);
    dispalyArray.forEach(album => {
        albumsRows.innerHTML += album;
    });
}
// Part 1: Create the rows array for display albums
const createDisplayAlbumArray = (albumArray) => {
    let resultArray = albumArray.map((album) => 
        `<tr>
          <td>${album.album}</td>
          <td>${album.releaseDate}</td>
          <td>${album.artistName}</td>
          <td>${album.genres}</td>
          <td>${album.averageRating}</td>
          <td>${album.numberReviews}</td>
        </tr>`)
    return resultArray;
}

// Part 1: Load albums data and render them in the table when page is loaded or refreshed
loadAlbumsDataByFetch("data/top_albums.json");


// Part 2: Add an event listener and handler to the form.
document.querySelector("#album-search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Get inputs and validate inputs value
    let filteredName = event.target["search"].value;
    let miniRating = event.target["min-album-rating"].value;

    // Assign the minimum rating to negative infinite if it is not specified
    miniRating = parseFloat(miniRating) || Number.NEGATIVE_INFINITY;

    // In default, list all albums in topAlbums if no any filtering values
    topAlbumsFiltered = topAlbums;

    // At first, filter albums by name if it is specified
    if (filteredName.trim().length > 0) {
        topAlbumsFiltered = filterAlbumsByName(topAlbums, filteredName);
    }

    // Then, filter the topAlbumsFiltered by rating if it is specified
    if (miniRating != Number.NEGATIVE_INFINITY) {
        topAlbumsFiltered = filterAlbumsByRating(topAlbumsFiltered, miniRating);
    }

    // Render the filerted result
    renderFilteredAlbums();
})

// Part 2: Filter albums by either Album name or artist name
const filterAlbumsByName = (albumArray, filterName) => {
    let resultArray = albumArray.filter((album) => 
        album.album.toLowerCase().includes(filterName.toLowerCase()) || 
        album.artistName.toLowerCase().includes(filterName.toLowerCase())
    )
    return resultArray;
}

// Part 2: Filter albums by minimum rating
const filterAlbumsByRating = (albumArray, miniRating) => {
    let resultArray = albumArray.filter((album) => 
        album.averageRating >= miniRating
    )
    return resultArray;
}

// Part Bonus: Sorting Average Rating and Minimum Reviews
document.querySelector("#albumn-column-headers").addEventListener("click", (event) => {
  if (event.target.tagName == "TH") {
        // Sort albums by rating from highest to lowest.
        if (event.target.innerText == "Average Rating") {
            topAlbumsFiltered.sort(function(a,b) {
                return (a.averageRating > b.averageRating) ? -1 : 1;
            })
            renderFilteredAlbums(topAlbumsFiltered);
        }
        // Sort albums by the number of reviews from highest to lowest.
        else if (event.target.innerText == "# of Reviews") {
            topAlbumsFiltered.sort(function(a,b) {
                return (a.numberReviews > b.numberReviews) ? -1 : 1;
            })
            renderFilteredAlbums();
        }
        // Challenge Part: (not for marks): Sort by Release Date
        else if (event.target.innerText == "Release") {
            topAlbumsFiltered.sort(function(a,b) {
                return (Date.parse(a.releaseDate) > Date.parse(b.releaseDate)) ? -1 : 1;
            })
            renderFilteredAlbums();
        }
    }
})