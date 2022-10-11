import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenfromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenfromUrl();
    window.location.hash = '';
    const _token = hash.access_token

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
        
      })
    }
   
    spotify.getUserPlaylists().then( (playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists
      })
    } )

    spotify.getPlaylist('37i9dQZEVXcEx4auSetwFz').then(
      (response) => {
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response,
          })
          console.log(response)
      }

    )

    
  }, [dispatch, token, user])

  return (
    <div className="App">
     {
      token ?
       <Player spotify={spotify} /> : 
      <Login />
     }
    </div>
  );
}

export default App;
