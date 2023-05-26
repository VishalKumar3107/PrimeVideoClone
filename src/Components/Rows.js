import React, { useEffect } from "react";
import { useState } from "react";
import "../allcss/row.css";
import axios from "axios";
import instance from "../Api/baseurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const base_url = "https://image.tmdb.org/t/p/original/";

function Rows({ title, fetchUrl, isLargeRow, type }) {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    async function fetchData(){
        const request = await instance.get(fetchUrl);
        console.log(request.data.results)
        setMovies(request.data.results);
        return request;
    }
    fetchData();
  },[fetchUrl]);


  return (
    <div className="row">
      <h2><span>{type}</span> &nbsp; {title}
      <button className="row-button">See more<FontAwesomeIcon className="row-button-icon" icon={faAngleRight} /></button>
      </h2>
      <div className="row_container">
        {movies.map(movie=>(
            <img key={movie.id} 
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.title}/>
        ))}
      </div>
    </div>
  );
}

export default Rows;
