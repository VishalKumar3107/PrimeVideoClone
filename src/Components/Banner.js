import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import endPoints from "../Api/request";
import axios from "axios";
import "../allcss/banner.css";
import {
    faAngleLeft,
    faAngleRight,
  faCircleCheck,
  faCircleInfo,
  faCirclePlay,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=56f19136c3287a8765285f9e42a20242&region=IN"
        );
        console.log(response.data.results.slice(0, 10));
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching slide data:", error);
      }
    }
    fetchData();
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 9 : prevSlide - 1));
  };
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 9 ? 0 : prevSlide + 1));
  };
  

  return (
    <div className="banner-carousel">
      {movies.length > 0 && (
        <div className="slide">
          <div className="slide-container">
            <h5>#{currentSlide} in India</h5>
            <h1>{movies[currentSlide].title}</h1>
            <h3>
              <FontAwesomeIcon icon={faCircleCheck} /> Included with Prime
            </h3>
            <div className="slide-button">
              <button className="slide-button-play">
                <FontAwesomeIcon icon={faCirclePlay} /> <span>Play</span>
              </button>
              <button className="slide-button-add">
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
              <button className="slide-button-info">
                <FontAwesomeIcon icon={faCircleInfo} />
              </button>
            </div>
          </div>
          <div className="image-wrapper">
            <img
              src={`${base_url}${movies[currentSlide].backdrop_path}`}
              alt={movies[currentSlide].title}
            />
          </div>
        </div>
      )}
      <button className="buttonPrev" onClick={prevSlide}>
      <FontAwesomeIcon icon={faAngleLeft} />      
      </button>
      <button className="buttonNext" onClick={nextSlide}>
      <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <div className="banner__fadeBottom"/>
    </div>
  );
}

// render(<Banner />);
