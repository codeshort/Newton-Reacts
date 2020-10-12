import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from 'react-video-js-player'
import Happy from "./video/song.mp4";
import Img from "C:/Users/user/Desktop/video-things/src/video/Unsplash_Image.jpg"
const VideoJs = () =>{
  const videoSrc = Happy;
  const image = Img;
  return(
    <div className ="App">
    <h1>VideoJS</h1>
    <VideoPlayer
    src ={videoSrc}
    poster ={image}
    data-setup='{"fluid": true, "aspectRatio": "1:1"}'
    width = "720"
    height = "420"
    />
    </div>
  );
};
export default VideoJs;
