import React from 'react'
import "../allcss/moviepage.css"
import { useLocation } from 'react-router-dom';
import { faCircleCheck, faCirclePlay, faCirclePlus, faClosedCaptioning, faDownload, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-bootstrap';
import endPoints from '../Api/request';

const base_url = "https://image.tmdb.org/t/p/original/";

function Moviepage() {
    
    const location = useLocation();
    const {movie, extraData} = location.state;
    

  return (
    <div>
    <div className="banner-container" >
      <div className="details-container" >
        <div className='details-container-title'><h2>{movie.title}</h2></div>
        <div className='details-container-overview'><p>{movie.overview}</p></div>
        <div className="details-container-smalldetails">
            <div>IMDB {movie.vote_average}</div>
            <div>{movie.release_date}</div>
            <button>X-Ray</button>
            <button>U/A 16+</button>
            <button><FontAwesomeIcon icon={faClosedCaptioning} /></button>
        </div>
        <div className='details-type'><FontAwesomeIcon className='details-type-check' icon={faCircleCheck} />Included with Prime</div>
        <div className='details-buttons'>
            <button><FontAwesomeIcon className='details-bigbuttons' icon={faCirclePlay} /></button><span>Play</span>
            <button><FontAwesomeIcon className='details-smallbuttons' icon={faCirclePlus} /></button>
            <button><FontAwesomeIcon className='details-smallbuttons' icon={faDownload} /></button>
            <button><FontAwesomeIcon className='details-smallbuttons' icon={faShareNodes} /></button>
        </div>
      </div>
      <div className="banner-image">
            <img src={`${base_url}${movie.backdrop_path}`} />
      </div>
    </div>
    </div>
  )
}

export default Moviepage