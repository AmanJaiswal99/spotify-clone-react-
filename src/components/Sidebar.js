import React from 'react'
import "../css/sidebar.css"
import SidebarOption from './SidebarOption'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import {useDataValue} from "../Data"

console.log(HomeIcon)
function Sidebar() {

    const[{playlists},dispatch]= useDataValue()

    return (
        <div className='sidebar'>
            <img className="sidebar_logo" src="https://www.basspromotions.com/wp-content/uploads/2019/05/Spotify_Logo_RGB_White.png"  alt=""/>

            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your library"/>
            <br/>
            <strong className="sidebar_title">Playlists</strong>
            <hr/>
            {playlists?.items?.map(playlist=>(
                <SidebarOption title={playlist.name}/>
            ))}
           
        </div>
    )
}

export default Sidebar
