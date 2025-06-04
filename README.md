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
- If login is successful, Supabase internally sets a **secure cookie** with the session token.
- On future requests, Supabase reads the session from the cookie to identify the logged-in user.

Protected pages like `/profile` check for an authenticated session by calling the `/api/user` route.
If no valid session is found, the user is redirected to the login page.
The file `src/middleware.ts` ensures that the session is refreshed automatically on navigation, and is injected into both client and server routes.

## Pages Overview

### `/homepage`

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

- User registration page with form and Supabase integration

### `/about` 

- Displays information about the website

### `/movies/book/[id]`

- A placeholder for the booking page
- Includes the title of the movie and a link to `movieInfo/[id]`

## Run it locally

1. Clone **_fullstack-kino_** repo
   - Run git clone https://github.com/EmpyreanMist/fullstack-kino.git in **_Git-Bash/PowerShell/Command Prompt/terminal_**

### 2. Create .env.local file and add following keys:

    - NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
    - NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.examplekey1234567890abcdefg
    - MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/your-database

### 3. Navigate to your cloned folder, thereafter run:

    - npm install
    - npm run build
    - npm run start

- Now the application will run

### Special note:

### \* If you want to run the application in development, just run:

    - npm install
    - npm run dev

## Supabase Setup Guide: Users Table

## 1. Initialize Supabase Project

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Wait for database initialization to complete

## 2. Create Users Table

### Using Table Editor

1. Navigate to **Table Editor** in dashboard
2. Click **Create New Table**
3. Configure table:
   - Name: `users`
   - Columns:
     - `id` (UUID, Primary Key) → Set default to `gen_random_uuid()`
     - `full_name` (text)
     - `birthdate` (date)
     - `phone` (text)
     - `city` (text)
     - `email` (text)
     - `created_at` (timestamp) → Set default to `now()`

## 3. Configure Security Policy

```sql
-- Policy allowing public access to Users table
ALTER POLICY "Allowed for all users"
ON "public"."users"
TO public
WITH CHECK (
  true
);
```

## View Live Version

Live demo: [https://fullstack-kino.vercel.app/](https://fullstack-kino.vercel.app/)

## Deploy to Vercel

To deploy this project to **Vercel**, follow these steps:

1. **Connect your GitHub repository to Vercel**  
   Import the project via [vercel.com](https://vercel.com) by linking your GitHub account.

2. **Set required environment variables** under the _Environment Variables_ section:

   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `MONGODB_URI`

3. **Use the official Supabase Integration** _(optional but recommended)_  
   To simplify the connection to Supabase, we use the official  
   [Supabase Integration with Vercel](https://vercel.com/marketplace/supabase) available via the Vercel Marketplace.

4. **Build process**  
   Vercel automatically runs the following commands during deployment:
   ```bash
   npm install
   npm run build
   ```

## Mongo Atlas

**Movies:**

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

**Screenings:**

All screening data was uploaded to a separate MongoDB cluster. The data follows this structure:

```json
{
  "_id": "",
  "date": "",
  "room": "",
  "movie": {
    "title": "",
    "movie_id": ""
  }
}
```

**Reviews:**

All review data is saved to a separate MongoDB cluster. It is updated everytime a user leaves a review on the website. The data follows this structure:

```json
{
  "id": "",
  "movieId": "",
  "name": "",
  "rating": ,
  "comment": "",
  "loggedIn": "",
  "profileImageId": "",
  "createdAt": ""
}
```

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

---

### Booking Routes (MongoDB)

| Method | Endpoint            | Description                                        |
| ------ | ------------------- | -------------------------------------------------- |
| GET    | `/api/booking/[id]` | Returns the title and ID of the movie being booked |
