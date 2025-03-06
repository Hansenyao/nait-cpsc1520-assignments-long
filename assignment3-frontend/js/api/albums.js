// base url defined below.
const BASE_URL = `http://localhost:5000`

// api requests functions below.
const searchAlbum = (searchName) => {
    // Create the real request url based on search text
    let url = BASE_URL + "/topAlbums";
    if (searchName.trim().length > 0) {
        url += "?q=";
        url += searchName.trim();
    }

    // Call REST API to get result
    let albumArray;
    const request = new XMLHttpRequest();
    request.open("GET", url, false);    // false: use synchronized mode
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            albumArray = JSON.parse(request.response);
            //console.log("Success");
        }
        else {
            console.log("Failed");
        }
    }
    request.send();

    return albumArray;
}

// Save an myAlbums item to server
const saveToMyAlbums = (album) => {
    // POST url
    let url = BASE_URL + "/myAlbums";
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(album));
}

// Get myAlbums list from server
const getMyAlbums = () => {
    // GET url for myAlbums
    let url = BASE_URL + "/myAlbums";

    // Call REST API to get result
    let myAlbumsArray;
    const request = new XMLHttpRequest();
    request.open("GET", url, false);    // false: use synchronized mode
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            myAlbumsArray = JSON.parse(request.response);
            //console.log("Success");
        }
        else {
            console.log("Failed");
        }
    }
    request.send();

    return myAlbumsArray;
}

export {searchAlbum}
export {saveToMyAlbums}
export {getMyAlbums}
