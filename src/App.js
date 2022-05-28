import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import spinner from "./assets/spinnerr.gif"


function App() {

  const [song, setsong] = useState("")
  const [artist, setartist] = useState("")
  const [lyricsa, setlyricsa] = useState("")
  const [load, setload] = useState(false)

  const lyricss = () => {
    if (artist === "" || song === "") {
      return;
    }
    // axios.get("https://api.lyrics.ovh/v1/Coldplay/Paradise")

    setload(true)
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      setlyricsa(res.data.lyrics)
      console.log(res.data)
      setload(false)
    }).catch((error) => {
      alert("error in fetching")
    })
  }

  return (
    <div className="App">
      <h1>
        Lyrical_
      </h1>
      <input className='artistname' type="text" placeholder='artist name'
        onChange={(e) => { setartist(e.target.value) }} />
      <input className='songname' type="text" placeholder='song name'
        onChange={(e) => { setsong(e.target.value) }} />
      <div>
        <button onClick={() => lyricss()}>Search Lyrics </button>
      </div>
      {load ? <img src={spinner} alt="loading..." /> : <pre className='lyr'>{lyricsa}</pre>}
    </div >
  );
}

export default App;
