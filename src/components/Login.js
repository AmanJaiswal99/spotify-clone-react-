import React from 'react'
import '../css/login.css'
import {loginUrl} from "../spotify"

function Login() {
    return (
        <div className='login'>
            <img src="https://services.tegrazone.com/sites/default/files/pcgame-featured-image/Spotify-MFG-840x360.jpg" alt=''/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            
        </div>
    )
}

export default Login
