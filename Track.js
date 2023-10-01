import React from "react";
import SearchResults from "./SearchResults";

function Track(props){
    const songs = props.musicList.map(song => {<li key={song.id}><p>{song.name}</p><p>{song.artist}</p><p>{song.album}</p></li>})
    return (
        <ul>{songs}</ul>
    )

};
export default Track;