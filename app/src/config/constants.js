export const apiUrl = {
  authorization: 'https://accounts.spotify.com/authorize',
  search: 'https://api.spotify.com/v1/search',
  albums: 'https://api.spotify.com/v1/albums',
};

export const paths = {
  search: 'search',
  album: 'album',

  spotifyCallback: 'spotify-callback',
};

export const spotifyConfig = {
  clientId: 'e1b64e07e993491f9904ac5f44876dfa',
  redirectURI: `http://localhost:8080/${paths.spotifyCallback}`,
};

export const isProduction = false;
