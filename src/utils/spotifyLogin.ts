export const CLIENT_ID = '443c34aba10142a9bfb0c535a50e54a2';
export const CLIENT_SECRET = '7e95565efcd045caabbcedcf69d4efb6';

export const REDIRECT_URI =
  typeof window !== 'undefined'
    ? window.location.origin
    : 'https://spotify-lewis.vercel.app';

export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
export const RESPONSE_TYPE = 'code';
export const SCOPES =
  'user-library-read,user-read-recently-played,playlist-modify-private,user-modify-playback-state,user-read-playback-state,user-read-currently-playing,user-top-read,user-read-currently-playing,streaming,user-read-email,user-read-private';

export const SPOTIFY_LOGIN = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
