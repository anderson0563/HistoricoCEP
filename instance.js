import axios from "axios";

const instance = axios.create({
    baseURL: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {
        s: 'Avengers Endgame',
        r: 'json',
        page: '1'
      },
    headers: {
        "Content-Type": "application/json",
        'X-RapidAPI-Key': 'd838361a6bmsh9cfe95a4edf7c4ep104549jsn95a5f8a5becd',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    },
});

export default instance;