import React from "react";
import meme from './images/memelogo.jpg'

export default function Header(){
    return(
<header className="header-container">
    <img src={meme} alt="memelogo" className="meme-logo"/>
    <h2 className="meme-heading">Meme Generator</h2>
    <h4 className="sm-heading">React Project</h4>
</header> 
    )
}