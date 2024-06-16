# Reelview

![Reelrate](https://i.ibb.co/Wn0VNhY/Frame-15.png)

Reelview is a web application for searching and viewing information about movies and TV shows. The application is built using React and TypeScript, and it includes a number of useful features for users.

## Features

- **Home Page**: Displays popular movies and TV shows.
- **Movie/TV Show Page**: Detailed information about the selected movie or TV show.
- **Search**: Ability to search for movies and TV shows from any page.
- **Authentication**: Implemented using Auth0.
- **Watchlist and Personal Ratings** (in development): Users can add movies and TV shows to a watchlist and rate them.

## Technologies used

- **React**: A library for building user interfaces.
- **TypeScript**: A programming language that is a superset of JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for styling.
- **[React Query](https://tanstack.com/query/v3)**: A library for managing server state and caching in React.
- **[TMDB](https://developer.themoviedb.org/docs)**: Api for fetching movie and TV show data.
- **[Auth0](https://auth0.com/docs)**: A platform for authentication and authorization.

## Installation and Setup

Follow the instructions below to set up the project on your local machine.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Create [TMDB](https://developer.themoviedb.org/docs) account and get api key (it's free)

2. Create basic auth0 react application (read auth0 docs for more info). Get auth0 domain and clientID

3. Clone the repository:

   ```bash
   git clone https://github.com/alexkharlam/reelview
   cd reelview
   ```

4. Install the dependencies:

   ```bash
   npm install
   ```

5. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```plaintext
   VITE_AUTH0_DOMAIN  (get from auth0 application)
   VITE_AUTH0_CLIENTID (get from auth0 application)
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   VITE_TMDB_API_KEY (get from tmdb account)
   VITE_TMDB_IMG_BASE_URL=https://image.tmdb.org/t/p
   ```

### Running the Application

```bash
npm run dev

Application will be available at http://localhost:5173/
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
