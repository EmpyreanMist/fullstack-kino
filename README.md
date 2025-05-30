# Kino - A Fullstack Movie Website

## Project info

This fullstack movie application was developed as part of an assignment during the **Lernia Fullstack Web Developer Course**.

### Contributors

- Christian [@EmpyreanMist](https://github.com/EmpyreanMist)
- Marcus [@marcusmoller97](https://github.com/marcusmoller97)
- Kai [@kai-ericson](https://github.com/kai-ericson)
- Nasrolla [@kikoDevv](https://github.com/kikoDevv)
- Jan [@jan-elia-24](https://github.com/jan-elia-24)
- Pelle [@NordicNomadicLife](https://github.com/NordicNomadicLife)

## Features

- Movie listings fetched from a MongoDB Atlas database
- Paginated movie listing (12 movies per page)
- Filter and sort movies by:
  - Highest or lowest rating
  - Release year (newest first)
  - One or multiple genres
  - Search in movie titles
- View detailed movie information including:
  - Title, year, poster, genre, plot and trailer
  - Cast with images and character names
- Leave reviews and ratings for each movie
  - Support for both logged-in and guest users
  - Avatar image selection based on login status
- View upcoming movie screenings sorted by time
- User authentication with Supabase:
  - Secure login/logout with cookie-based sessions
  - User registration with metadata (name, phone, city, birthdate)
- Protected routes like `/profile` with auth check
- Responsive design with Bootstrap

## Tech Stack

**Frontend:**

- Next.js
- Bootstrap
- CSS Modules

**Backend:**

- Next.js
- MongoDB Atlas, Mongoose
- PostgreSQL, Supabase

## Authentication with Supabase and Secure Cookies

- Users login via the `/login` page using email and password.
- Credentials are sent to `/api/login` which uses the **Supabase Auth API** to authenticate the user.
- If login is successfull, Supabase internally sets a **secure cookie** with the session token.
- On future requests, Supabase reads the session from the cookie to identify the logged-in user.

Protected pages like `/profile` check for an authenticated session by calling the `/api/user` route.
If no valid session is found, the user is redirected to the login page.
The file `src/middleware.ts` ensures that the session is refreshed automatically on navigation, and is injected into both client and server routes.

## Pages Overview

### `/` Homepage

- Displays top 5 highest-rated movies
- Shows upcoming movie screenings

### `/movies`

- Displays full list of movies
- Sort and filter by rating, genre, release year and title search

### `/movieInfo/[id]`

- Dynamic movie detail page
- Includes trailer, cast, plot and review section

### `/profile`

- Displays the authenticated user's profile

### `/register`

- User registration page with form and SUpabase integration

### `/about` UPDATE WHEN MERGED

- Displays information about the website

### `/movies/book/[id]`
 - A placeholder for the booking page
 - Includes the title of the movie and a link to `movieInfo/[id]`

## Run it localy | ADD LATER

## View live version: We haven't deployed yet, UPDATE THIS AFTER

## Mongo Atlas

All movie data uploaded to MongoDB Atlas was collected from TMDb (The Movie Database) using their API.

The data follows this structure:

```json
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
```

A total of 82 movie objects were uploaded to the database, based on a 3418-line JSON file retrieved and processed from TMDb.

## Supabase "Users" Table

| Field             | Description                                  |
| ----------------- | -------------------------------------------- |
| `id` UID          | Unique identifier for the user               |
| `email`           | User's email address                         |
| `display_name`    | Display name / full name set at registration |
| `created_at`      | Account creation timestamp                   |
| `Last_sign_in_at` | Timestamp for latest login                   |

## API Endpoints Overview

### Auth Routes (Supabase)

| Method | Endpoint        | Description                                            |
| ------ | --------------- | ------------------------------------------------------ |
| POST   | `/api/login`    | Authenticates user via email/password using Supabase   |
| POST   | `/api/logout`   | Signs out user and clears session cookie               |
| GET    | `/api/user`     | Returns the current authenticated user's info          |
| POST   | `/api/register` | Registers new user and adds metadata to Supabase table |

---

### Movie Routes (MongoDB)

| Method | Endpoint             | Description                                                     |
| ------ | -------------------- | --------------------------------------------------------------- |
| GET    | `/api/movies`        | Returns a paginated list of movies with search, sort and filter |
| GET    | `/api/movies/[id]`   | Returns full movie data by movie ID                             |
| GET    | `/api/movies/genres` | Returns all distinct genres found in movie collection           |

---

### Review Routes (MongoDB)

| Method | Endpoint      | Description                                                 |
| ------ | ------------- | ----------------------------------------------------------- |
| GET    | `/api/review` | Returns all reviews or filters by `movieId` via query param |
| POST   | `/api/review` | Submits a review for a movie                                |

---

### Screening Routes (MongoDB)

| Method | Endpoint          | Description                              |
| ------ | ----------------- | ---------------------------------------- |
| GET    | `/api/screenings` | Returns all upcoming screenings (sorted) |
