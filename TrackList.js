import React from "react";
import styles from './TrackList.module.css'
import SearchBar from "./SearchBar";


function TrackList(){
    return(
        <>
        <div className={styles.trackList}>
            <ul></ul>
        <SearchBar/>
        </div>
        
        </>
    );
}
export default TrackList;