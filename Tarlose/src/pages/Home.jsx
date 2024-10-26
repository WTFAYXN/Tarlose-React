import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import "../index.css";
import "./home.css";
import HeroVideo from "../assets/videos-audio/universe.mp4";
import TarloseTheme from "../assets/videos-audio/tarlose-theme-sound.mp3";
import gsap from "gsap";

const Home = () => {
  const trackRef = useRef(null);
  const controlBtnRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const controlBtn = controlBtnRef.current;

    const playPause = () => {
      if (track.paused) {
        track.play();
        controlBtn.className = "pause";
      } else {
        track.pause();
        controlBtn.className = "play";
      }
    };

    const handleTrackEnded = () => {
      controlBtn.className = "play";
    };

    controlBtn.addEventListener("click", playPause);
    track.addEventListener("ended", handleTrackEnded);

    // Cleanup event listeners on component unmount
    return () => {
      controlBtn.removeEventListener("click", playPause);
      track.removeEventListener("ended", handleTrackEnded);
    };
  }, []);

//   useEffect(() => {
//     gsap.from("#home h1", {
//       y: 100,
//       opacity: 0,
//       delay: 0.5,
//       duration: 0.9,
//       stagger: 0.3
//     });

//     gsap.from("#home .content-home", {
//       y: 100,
//       opacity: 0,
//       delay: 1.5,
//       duration: 0.9,
//       stagger: 0.3
//     });

//     gsap.from("#btn-fade", {
//       y: 100,
//       opacity: 0,
//       delay: 1.7,
//       duration: 0.9,
//       stagger: 0.3
//     });
//   }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <div className="container hero" id="home">
        <video autoPlay loop muted>
          <source src={HeroVideo} type="video/mp4" />
        </video>

        <audio id="track" ref={trackRef}>
          <source src={TarloseTheme} type="audio/mpeg" />
        </audio>

        <div id="player-container">
          <div id="play-pause" className="play" ref={controlBtnRef}>
            Play
          </div>
        </div>

        <h1 className="text-white text-center main-heading-text">
          Design. Develop. Dominate.
        </h1>
        <div className="content-home d-flex justify-content-center align-items-center my-5 ">
          <div className="sub-home-cont d-flex align-items-center rounded flex-wrap">
            <p>for</p>
            <p>
              <span>Startups</span>
            </p>
            <p>,</p>
            <p>
              <span>Agencies</span>
            </p>
            <p>,</p>
            <p>
              <span>SMBs</span>
            </p>
            <p>and</p>
            <p>
              <span>Social Good</span>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div id="btn-fade">
            <a href="#Work">
              <button className="btn btn-work px-3 py-2" type="button">
                Our Works
              </button>
            </a>
            <a href="tel: 91+8291617114">
              <button className="btn btn-contact px-3 py-2" type="button">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;