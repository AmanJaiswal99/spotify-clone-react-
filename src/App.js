import React from 'react';
import Login from './components/Login'
import './App.css';
import { useEffect } from 'react';
import { getTokenFromUrl } from './spotify';

import SpotifyWebApi from "spotify-web-api-js"
import Player from './components/Player'
import {useDataValue} from './Data'


const spotify = new SpotifyWebApi();

function App() {


  const [{user,token}, dispatch] = useDataValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
     
 console.log(token)
      spotify.setAccessToken(_token)

      spotify.getMe().then(user=>{
     
        dispatch({
          type: 'SET_USER',
          user:user
        })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists: playlists
        })
      })
      spotify.getPlaylist('37i9dQZEVXcTwcerNriNyZ').then((response)=>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        }))
    }
   
  },[])


 
  return (
  <div className='App'>
    {
      token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login/>
      )
    }
    
  </div>
  );
}

export default App;
