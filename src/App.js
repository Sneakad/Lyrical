import React, { useState } from 'react';
import axios from "axios"
import './App.css';


function App() {

  const [song, setsong] = useState("")
  const [artist, setartist] = useState("")
  const [lyricsa, setlyricsa] = useState("")

  const lyricss = () => {
    if (artist === "" || song === "") {
      return;
    }
    // axios.get("https://api.lyrics.ovh/v1/Coldplay/Paradise")
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      console.log(res.data.lyrics)
      setlyricsa(res.data.lyrics)
    }).catch((error) => {
      alert("error in fetching")
    })
  }

  return (
    <div className="App">
      <input className='artistname' type="text" placeholder='artist name'
        onChange={(e) => { setartist(e.target.value) }} />
      <input className='songname' type="text" placeholder='song name'
        onChange={(e) => { setsong(e.target.value) }} />
      <div><button
        onClick={() => lyricss()}>Search Lyrics </button>
        <pre className='lyr'>{lyricsa}</pre></div>

    </div >

  );
}

export default App;
