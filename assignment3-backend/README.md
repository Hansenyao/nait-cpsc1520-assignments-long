# Backend JSON Server

## Running the server

install the dependencies and run the server using the following command

```
npm run server
```

## GET Album Search Endpoint 

To be able to search the top albums please refer to the following example.

We're searching for albums with "double" in contained in any of the data.

### Request
GET http://localhost:5000/topAlbums?q=double

### Response
```json
[
  {
    "ranking": "340.",
    "album": "Double Nickels on the Dime",
    "artistName": "Minutemen",
    "releaseDate": "July 1984",
    "genres": "Post-Punk, Art Punk, Post-Hardcore",
    "descriptors": "political, satirical, energetic, sarcastic, rhythmic, humorous, playful, male vocals, rebellious, philosophical",
    "averageRating": "3.91",
    "numberRatings": "11,105",
    "numberReviews": "234"
  },
  {
    "ranking": "617.",
    "album": "Free Jazz",
    "artistName": "The Ornette Coleman Double Quartet",
    "releaseDate": "September 1961",
    "genres": "Free Jazz",
    "descriptors": "improvisation, chaotic, instrumental, avant-garde, technical, dissonant, energetic, acoustic, anxious, complex",
    "averageRating": "3.88",
    "numberRatings": "4,655",
    "numberReviews": "91"
  }
]
```

## POST myAlbums Endpoint

### Request
POST http://localhost:5000/myAlbums
Sample body note you'll have to change the headers for this to let the backend know you'll be sending JSON data. 
```json
{
  "ranking": "617.",
  "album": "Free Jazz",
  "artistName": "The Ornette Coleman Double Quartet",
  "releaseDate": "September 1961",
  "genres": "Free Jazz",
  "descriptors": "improvisation, chaotic, instrumental, avant-garde, technical, dissonant, energetic, acoustic, anxious, complex",
  "averageRating": "3.88",
  "numberRatings": "4,655",
  "numberReviews": "91"
}
```
### Response
```json
{
  "ranking": "617.",
  "album": "Free Jazz",
  "artistName": "The Ornette Coleman Double Quartet",
  "releaseDate": "September 1961",
  "genres": "Free Jazz",
  "descriptors": "improvisation, chaotic, instrumental, avant-garde, technical, dissonant, energetic, acoustic, anxious, complex",
  "averageRating": "3.88",
  "numberRatings": "4,655",
  "numberReviews": "91"
}
```

## GET myAlbums Endpoint

GET http://localhost:5000/myAlbums
Response
```json
[
  {
    "ranking": "340.",
    "album": "Double Nickels on the Dime",
    "artistName": "Minutemen",
    "releaseDate": "July 1984",
    "genres": "Post-Punk, Art Punk, Post-Hardcore",
    "descriptors": "political, satirical, energetic, sarcastic, rhythmic, humorous, playful, male vocals, rebellious, philosophical",
    "averageRating": "3.91",
    "numberRatings": "11,105",
    "numberReviews": "234"
  },
  {
    "ranking": "617.",
    "album": "Free Jazz",
    "artistName": "The Ornette Coleman Double Quartet",
    "releaseDate": "September 1961",
    "genres": "Free Jazz",
    "descriptors": "improvisation, chaotic, instrumental, avant-garde, technical, dissonant, energetic, acoustic, anxious, complex",
    "averageRating": "3.88",
    "numberRatings": "4,655",
    "numberReviews": "91"
  }
]
```



