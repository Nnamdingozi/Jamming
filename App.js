import React from 'react';
import './App.css';
import SearchBar from './Jamming/SearchBar';
import SearchResults from './Jamming/SearchResults';
import TrackList from './Jamming/TrackList'
import Track from './Jamming/Track';



function App() {
  const musicList = [
{id:1, name:'old Pirates', artist: 'Bob Maarley', album:'Rivers of Babylon' },
{id:2, name:'People know you', artist: 'Shakira', album:'The bomb'},
{id:3, name:'Good sin', artist: 'Burna Boy', album:'Shaking'},
{id:4, name:'Xtra cool', artist: 'Young Jphn', album:'Cool'},
{id:5, name:'Feel', artist: 'Kizz daniels', album:'Omo'}
  ];


  return (
    <div className='banner'>
     <h1><span style={{color:'purple'}} >JA</span><span style={{color:'rgb(235, 142, 208)', fontSize: '2.4rem'}}>MMM</span><span style={{color:'purple'}}>ING</span></h1>
     <input
     type='text'/>
     <SearchBar name={'Search'}/>
     <div className='container'>
     <SearchResults musicList ={musicList} />
     <TrackList musicList ={musicList}/>
     
    
     </div>

     </div>
    
  );
}

export default App;
