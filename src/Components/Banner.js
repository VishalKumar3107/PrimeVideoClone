import React, { useEffect, useRef, useState } from "react";
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
import instance from "../Api/baseurl";
import { useNavigate } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Banner({ title, fetchUrl }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [movies, setMovies] = useState([]);
  const timerRef = useRef(null);
  const nav =useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(fetchUrl);
        console.log(response.data.results.slice(0, 10));
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching slide data:", error);
      }
    }
    fetchData();
    startTimer();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 9 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 9 ? 0 : prevSlide + 1));
  };

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
  };

  const restartTimer = () => {
    clearTimeout(timerRef.current);
    startTimer();
  };

  const handleMovieClick = (movie) => {
    nav(`/${movie.title}`, { state: {
      movie: movie    }, });
  };


  return (
    <div className="banner-carousel">
      {movies.length > 0 && (
        <div className="slide">
          <div className="slide-container">
            <h5>#{currentSlide + 1} in India</h5>
            <h1>{movies[currentSlide].title}</h1>
            <h3>
              <FontAwesomeIcon
                className="bannericonverified"
                icon={faCircleCheck}
              />
              Included with Prime
            </h3>
            <div className="slide-button">
              <button onClick={() => handleMovieClick(movies[currentSlide])} className="slide-button-play">
                <FontAwesomeIcon
                  className="bannericonplay"
                  icon={faCirclePlay}
                />
              </button>
              <button onClick={() => handleMovieClick(movies[currentSlide])} className="slide-button-add">
                <FontAwesomeIcon className="bannericon" icon={faCirclePlus} />
              </button>
              <button onClick={() => handleMovieClick(movies[currentSlide])} className="slide-button-info">
                <FontAwesomeIcon className="bannericon" icon={faCircleInfo} />
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
        <FontAwesomeIcon className="bannericon" icon={faAngleLeft} />
      </button>
      <button className="buttonNext" onClick={nextSlide}>
        <FontAwesomeIcon className="bannericon" icon={faAngleRight} />
      </button>
      <div className="banner__fadeBottom" />
    </div>
  );
}
