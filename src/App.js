import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();


function App() {
 // const [token, setToken] = useState(null);
  const [{user, token,playlists}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      spotify.getPlaylist('5gKEn61FEr0MDiScbG6Xjj')
        .then(response => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        })
    }
  },[]);

  // console.log('user---->', user)
  // console.log('token', token)

  return (
    <div className="app">
      {
        token ? ( <Player spotify={spotify}/> ) : (  <Login/> )
      }
    </div>
  );
}

export default App;
