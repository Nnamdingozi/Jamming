import React from "react";
import styles from './SearchResults.module.css';






function SearchResults ({musicList}){
const result = musicList.map(track=> <div  className={styles.musicList}><h2 className={styles.trackName} >{track.name}</h2> <p className={styles.trackArtist}>{track.artist}</p> </div> )
// function selectedList(currentId) {
//     const trackArray =[]
//     if (currentId === result.id) {trackArray.push(result.id)}


    

return(

    <div className={styles.searchResults}>
        <h1>Search Results</h1>
{result}
    </div>
)
};
export default SearchResults;