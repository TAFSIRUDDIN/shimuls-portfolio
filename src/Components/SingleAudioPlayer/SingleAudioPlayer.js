import React, { useState, useEffect, useRef } from 'react';
import imgSrc from "./assets/artwork.jpg";
import imgSrc2 from "./assets/artwork2.jpg";
import imgSrc3 from "./assets/artwork3.jpg";
import cali from "./assets/cali-wataboi.mp3";
import fifty from "./assets/50-tobylane.mp3";
import iwonder from "./assets/iwonder-dreamhaven.mp3";
import './SingleAudioPlayer.css';
import SingleAudioControls from './SingleAudioControls';
import Lottie from 'lottie-web';


const tracks = [
    {
      title: "I Wonder",
      artist: "DreamHeaven",
      audioSrc: iwonder,
      image: imgSrc3,
      color: "#5f9fff"
    }
  ];

const SingleAudioPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const { title, artist, color, image, audioSrc } = tracks[trackIndex];

    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
  
        intervalRef.current = setInterval(() => {
          if (audioRef.current.ended) {
            toNextTrack();
          } else {
            setTrackProgress(audioRef.current.currentTime);
          }
        }, [1000]);
      }

    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
          setTrackIndex(tracks.length - 1);
        } else {
          setTrackIndex(trackIndex - 1);
        }
      }
      
    const toNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
          setTrackIndex(trackIndex + 1);
        } else {
          setTrackIndex(0);
        }
      }

      useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
      
              startTimer();
        } else {
              clearInterval(intervalRef.current);
          audioRef.current.pause();
        }
      }, [isPlaying]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
          audioRef.current.pause();
          clearInterval(intervalRef.current);
        }
      }, []);

    // Handle setup when changing tracks
    useEffect(() => {
        audioRef.current.pause();
      
        audioRef.current = new Audio(audioSrc);
          setTrackProgress(audioRef.current.currentTime);
      
        if (isReady.current) {
          audioRef.current.play();
          setIsPlaying(true);
      
              startTimer();
        }
      }, [trackIndex]);

    const onScrub = (value) => {
        // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
    
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsPlaying(true);
      }
      startTimer();
    }

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`;


  const container3 = useRef(null);
  const container4 = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
        container: container3.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./13999-beating-audio-amplifiers.json')
    })
  },[])
  useEffect(() => {
    Lottie.loadAnimation({
        container: container4.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./13999-beating-audio-amplifiers.json')
    })
  },[])
    return (
		<div style ={{margin: '0 auto'}} className="audio-player row">
      <div className="container3 col-md-2" ref={container3}></div>
			<div className="track-info col-md-8">

            <SingleAudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
            />

            <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="progress"
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
                    style={{ background: trackStyling }}
                />
			</div>
      <div className="container4 col-md-2" ref={container4}></div>

		</div>
    );
};

export default SingleAudioPlayer;