import React, { useEffect, useState } from 'react'
import instance from '../Api/baseurl';
import { useNavigate } from 'react-router-dom';

const base_url = "https://image.tmdb.org/t/p/original/";


function Categorycomp({ title, fetchUrl, isLargeRow, type }) {
  const nav = useNavigate();
  const [movies, setMovies] =useState([]);
  

  useEffect(()=>{
    async function fetchData(){
      const response = await instance.get(fetchUrl)
      setMovies(response.data.results)
      return response;
    }
    fetchData();
  },[fetchUrl])

  const handleMovieClick = (movie) => {
    nav(`/${movie.title}`, {
      state: {
        movie: movie,
        extraData: { title, fetchUrl, isLargeRow, type },
      },
    });
  };

  // console.log("title:", title)

  return (
    <div className='Categorycomp'>
      <h1 className='CategorycompH'>{title} Movies</h1>
      <div className='Categorycompouter'>
        {movies.map((movie)=>(
          <div class="Categorycompcard" 
          style={{ backgroundImage: `url(${base_url}${movie.poster_path})`,  backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat' }}
          key={movie.id}>
          <button onClick={()=>handleMovieClick(movie)} class="Categorycompcard-button">{movie.title}</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Categorycomp