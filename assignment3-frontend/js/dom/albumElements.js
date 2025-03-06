/*

<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div class="fw-bold">
            Subheading
            <span class="badge bg-primary rounded-pill">14</span>
        </div>
        <span> Cras justo odio </span>
    </div>
    <button type="button" class="btn btn-success">Add to My Albums</button>
</li>


*/

// create the function "createAlbumItem" here
const addAlbumToList = (albumList, album, index, addButton) => {
    if (albumList == null || album == null) {
        alert("Parameter is null!");
        return;
    }

    let ratingText = document.createTextNode(album.averageRating);
    let spanRating = document.createElement("span");
    spanRating.classList.add("badge");
    spanRating.classList.add("bg-primary");
    spanRating.classList.add("rounded-pill");
    spanRating.appendChild(ratingText);
    //
    let albumNameText = document.createTextNode(album.album);
    let divAlbumName = document.createElement("div");
    divAlbumName.classList.add("fw-bold");
    divAlbumName.appendChild(albumNameText);
    divAlbumName.appendChild(spanRating);
    //
    let artistText = document.createTextNode(album.artistName);
    let spanArtist = document.createElement("span");
    spanArtist.appendChild(artistText);
    //
    let divAlbum = document.createElement("div");
    divAlbum.appendChild(divAlbumName);
    divAlbum.appendChild(spanArtist);
    //
    let liNode = document.createElement("li");
    liNode.classList.add("list-group-item");
    liNode.classList.add("d-flex");
    liNode.classList.add("justify-content-between");
    liNode.classList.add("align-items-start");
    liNode.appendChild(divAlbum);
    //
    if (addButton) {
        let btnText = document.createTextNode("Add to My Albums");
        let btnAdd = document.createElement("button");
        btnAdd.setAttribute("type", "button");
        btnAdd.classList.add("btn");
        btnAdd.classList.add("btn-success");
        btnAdd.classList.add("my-album-button");
        btnAdd.appendChild(btnText);
        //
        liNode.appendChild(btnAdd);
    }

    liNode.setAttribute("index", index);
    albumList.appendChild(liNode);
}

export {addAlbumToList}


