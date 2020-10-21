import React from 'react'
import "../css/footer.css"
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import {Grid,Slider} from "@material-ui/core";



function Footer() {
    return (
        <div className='footer'>
            <div className="footer_left">
                <img className="footer_albumLogo"src="https://upload.wikimedia.org/wikipedia/en/d/d1/Babycoverart.jpg" alt=""/>
                <div className="footer_songInfo">
                    <h4>Baby</h4>
                    <p>Justin</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
