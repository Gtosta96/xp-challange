export const apiUrl = {
  authorization: 'https://accounts.spotify.com/authorize',
  search: 'https://api.spotify.com/v1/search',
  albums: 'https://api.spotify.com/v1/albums',
};

export const paths = {
  search: 'search',
  album: 'album',

  spotifyCallback: process.env.REACT_APP_SPOTIFY_CALLBACK,
};

export const spotifyConfig = {
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  redirectURI: `http://localhost:8080/${paths.spotifyCallback}`,
};

export const isProduction = false;
