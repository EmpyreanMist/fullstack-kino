## Mongo Atlas
All movie data uploaded to MongoDB Atlas was collected from TMDb (The Movie Database) using their API.

The data follows this structure:
{
  "imdbId": "",
  "title": "",
  "year": "",
  "rating": "",
  "runtime": "",
  "trailer": "",
  "plot": "",
  "poster": "",
  "genre": [],
  "cast": [
    {
      "name": "",
      "character": "",
      "image": ""
    }
  ]
}
A total of 82 movie objects were uploaded to the database, based on a 3418-line JSON file retrieved and processed from TMDb.

