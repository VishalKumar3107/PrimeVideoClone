import React, { useEffect } from "react";
import { useState } from "react";
import "../allcss/row.css";
import instance from "../Api/baseurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function Rows({ title, fetchUrl, isLargeRow, type }) {
  const nav = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("")


  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleMovieClick = (movie) => {
    nav(`/${movie.title}`, {
      state: {
        movie: movie,
        extraData: { title, fetchUrl, isLargeRow, type },
      },
    });
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000);


  const handleClick=(category)=>{
    setCategory(category)
    nav(`/category/${category}/`)
  }

  return (
    <div className="row">
      <h2>
        <span>{type}</span> &nbsp; {title}
        <button className="row-button" onClick={()=>handleClick(title)} >
          See more
          <FontAwesomeIcon className="row-button-icon" icon={faAngleRight} />
        </button>
      </h2>
      <div className="row_container">
        {movies.map((movie) => (
          <div
            className="figure"
            key={movie.id}
            onClick={() => handleMovieClick(movie, { title, type })}
          >
            {loading ? (
              <div className="loader">
                <div className="custom-loader"> Loding...</div>
              </div>
            ) : (
              <>
                <img
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt="{movie.name}"
                />
                <p className="figcaption">
                  {movie.title}
                  <span>{movie.overview}</span>
                  <span className="figcaptionspan">
                    IMDB {movie.vote_average} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;

                    &nbsp; &nbsp; &nbsp; &nbsp; {movie.release_date}
                  </span>
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rows;
