import React, { useState } from 'react'
import "../allcss/categories.css"
import { useNavigate } from 'react-router-dom'

function Categories() {
const [category, setCategory] = useState("")
const navigator = useNavigate()

  const handleClick=(category)=>{
    setCategory(category)
    navigator(`/category/${category}/`)
  }

  return (
    <div className='categories'>
        <h2>Categories</h2>
        <div className='categories-genres'>
            <h3>Genres</h3>
            <div onClick={()=>handleClick('Adventure')}>Adventure</div>
            <div onClick={()=>handleClick('ScienceFiction')}>ScienceFiction</div>
            <div onClick={()=>handleClick('Comedy')}>Comedy</div>
            <div onClick={()=>handleClick('Drama')}>Drama</div>
            <div onClick={()=>handleClick('Shortfilms')}>Shortfilms</div>
            <div onClick={()=>handleClick('Horror')}>Horror</div>
            <div onClick={()=>handleClick('Crime')}>Crime</div>
            <div onClick={()=>handleClick('Thriller')}>Thriller</div>
            <div onClick={()=>handleClick('PopularinRegion')}>PopularinRegion</div>
            <div onClick={()=>handleClick('Action')}>Action</div>
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