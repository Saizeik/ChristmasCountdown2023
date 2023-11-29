'use client'


import getContent from "/src/app/content.jsx";
import SantaReindeer from "./santa.jsx";
import React, { useState, useRef, useEffect } from "react";



// Add a string to the input field

function YouTubeJukebox() {
  // Create a state variable to store the list of video IDs
  const [videoIds, setVideoIds] = useState([]);

  // Create a state variable to store the currently playing video
  const [currentVideo, setCurrentVideo] = useState(null);

  // Create a function to add a video to the queue
  const addVideo = (id) => {
    setVideoIds([...videoIds, id]);
  };

  // Create refs for DOM elements
  const inputFieldRef = useRef(null);
  const autoAddRef = useRef(null);


  // Add a string to the input field

  

  // Create a function to play the next video in the queue
  const playNextVideo = () => {
    // If there are no more videos in the queue, stop the player
    if (videoIds.length === 0) {
      setCurrentVideo(null);
      return;
    }

   
    // Otherwise, set the current video to the next video in the queue and remove it from the list
    const nextVideo = videoIds[0];
    setCurrentVideo(nextVideo);
    setVideoIds(videoIds.slice(1));
  };

  const addAndPlayVideo = (id) => {
    addVideo(id);
    playNextVideo();
    
  };


  const whiteChristmas = () => {
    inputFieldRef.current.value = "PoAjmmD89Vw";
    addAndPlayVideo("PoAjmmD89Vw");
  };
  const rockn = () => {
    inputFieldRef.current.value = "1qYz7rfgLWE";
    addAndPlayVideo("1qYz7rfgLWE");
  };

  const jingleBellRock = () => {
    inputFieldRef.current.value = "R_vmuL0gjU0";
    addAndPlayVideo("R_vmuL0gjU0");
   
  };

  const lookAlotLike = () => {
    inputFieldRef.current.value = "WaNwEkCeZrE";
    addAndPlayVideo("WaNwEkCeZrE");
  };

  const wonderfulTime = () => {
    inputFieldRef.current.value = "AN_R4pR1hck";
    addAndPlayVideo("AN_R4pR1hck");
  };


  // Create an iframe element and set its src to the YouTube video URL
  const iframe = currentVideo && (
    <iframe src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`} />
  );

  return (
    <div>
      {/* Render a form to allow users to add videos to the queue */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addVideo(event.target.videoId.value);
          event.target.videoId.value = "";
        }}
      >
        <div className="button-container">
          
          <button onClick={whiteChristmas}><p className ="animate__bounceIn">White Christmas</p></button>
          <button onClick={rockn}><p className ="animate__bounceIn">Rockin' Around The Christmas Tree</p></button>
          <button onClick={jingleBellRock}><p className ="animate__bounceIn">Jingle Bell Rock</p></button>
          <button onClick={lookAlotLike}><p className ="animate__bounceIn">
            It's Beginning to Look a Lot Like Christmas</p>
          </button>
          <button onClick={wonderfulTime}><p className ="animate__bounceIn">
            It's the Most Wonderful Time of the Year</p>
          </button>
        </div>
        <label htmlFor="videoId">Enter a YouTube video ID:</label>
        <input ref={inputFieldRef} id="video" type="text" name="videoId" />
        <button ref={autoAddRef} id="add-video" type="submit"><p className ="animate__bounceIn">
          Add Video
          </p></button>
      </form>

      {/* Render a button to play the next video in the queue */}
      <button id="play-next" onClick={playNextVideo}><p className ="animate__bounceIn">
        Play Next Video</p>
      </button>
      <div className="player-container">
        {/* Render the iframe element to display the currently playing video */}
        {iframe}
      </div>
    </div>
  );
}

function App() {

  useEffect(() => {
  const countdown = setInterval(function () {
    const christmas = 25;
 // get today's date (you only need the day)




    const now = new Date();
   
   
   const year = now.getFullYear();
   function daysUntilChristmas() {
    // Get the current date
    const currentDate = new Date();
  
    // Set the target date to December 25th of the current year
    const targetDate = new Date(currentDate.getFullYear(), 11, 25);
  
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = targetDate - currentDate;
  
    // Convert the difference to days
    const differenceInDays = differenceInMilliseconds / 86400000;
  
    // Round the result down to the nearest whole number
    return Math.floor(differenceInDays);
  }
  
    const td = new Date("December 25," + year + " 00:01:00");
    const distance = td.getTime() - now.getTime();
   

    

    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let days = daysUntilChristmas();
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours %= 24; // % Modulus; hours = hours/24; returns the remainder after dividing the specific values. the remainder is the modulus
    minutes %= 60;
    seconds %= 60;
    const countdownDisplay =
    days +
      " " +
      "days" +
      " " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s ";
  
   
    document.getElementById("christmasCountdown").innerHTML = countdownDisplay;
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("christmasCountdown").innerHTML =
        "Merry Christmas!";
       document.querySelector(".countdownText").innerHTML = "";
        
    }
  }, 1000)
}, [/* dependencies, if any */]);


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <main className="main">
            {getContent()}
            {SantaReindeer()}
            <p id="santa"></p>
            <p id="christmasCountdown"></p>
            <p className="countdownText">'til Christmas!</p>
            <YouTubeJukebox className = "jukebox" />
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
