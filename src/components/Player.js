import React from 'react'
import "../css/player.css"
import Sidebar from "./Sidebar"
import Body from "./Body"
import Footer from "./Footer"


function Player({spotify}) {
    return (
        <div className='player'>
            <div className='sidebar_body'>
            <Sidebar/>
            <Body spotify={spotify}/>
            </div>
           <Footer/>
        
        </div>
    )
}

export default Player
