import React from 'react'
import "../allcss/categories.css"

function Categories() {
  return (
    <div className='categories'>
        <h2>Categories</h2>
        <div className='categories-genres'>
            <h3>Genres</h3>
            <div>Action</div>
            <div>Adventure</div>
            <div>Anime</div>
            <div>Comedy</div>
            <div>Drama</div>
            <div>Fantasy</div>
            <div>Horror</div>
            <div>Kids</div>
            <div>Mystery</div>
            <div>Romance</div>
        </div>
        <div className='categories-featured'>
        <h3>Featured collections</h3>
            <div>Hindi</div>
            <div>English</div>
            <div>Telgu</div>
            <div>Tamil</div>
            <div>Malayalam</div>
            <div>Kannada</div>
            <div>Marathi</div>
            <div>Punjabi</div>
            <div>Gujrati</div>
            <div>Bengali</div>
        </div>
    </div>
  )
}

export default Categories