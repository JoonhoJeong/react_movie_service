import React, { useEffect, useState } from 'react';
import {API_URL, API_KEY} from '../../../Config.js';
import "../../../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import ReactPlayer from "react-player"

function ShowVideo(props) {
  let movieId = props.movieId;
  let Movie = props.Movie;
  const [VideoKey, setVideoKey] = useState(null);
  //https://www.themoviedb.org/video/play?key=LARtwiKmRmk
  useEffect(() => {    
    let endpointVideo = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
    
    console.log(endpointVideo);

    fetch(endpointVideo)
      .then(response => response.json())
      .then(response => {
        setVideoKey(response.results[0].key);
        console.log(response.results[0].key);
        console.log('JJH1' + VideoKey);
      });
      console.log('JJH2' + VideoKey);
      console.log('JJH3' + Movie.backdrop_path);
  })
  
  return (
    <div>
       <ReactPlayer
        //url={`https://www.themoviedb.org/video/play?key=${VideoKey}`}
        url={'https://www.youtube.com/watch?v=7sDY4m8KNLc'}
      />

      {/* <Player
      playsInline
      poster={Movie.backdrop_path}
      src={`https://www.themoviedb.org/video/play?key=${VideoKey}`}
      //src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'}
      /> */}
    </div>
  )
}

export default ShowVideo
