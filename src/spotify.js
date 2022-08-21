export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';
const clientid = 'eb8e3103915049eea15a7435f7aa45ec'

const scopes = [
   'user-read-currently-playing',
   'user-read-recently-played',
   'user-read-playback-state',
   'user-top-read',
   'user-modify-playback-state'
]

export const getTokenfromUrl = () => {
   return window.location.hash
   .substring(1)
   .split('&')
   .reduce((initial, item) => {
      var parts  = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
   }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;