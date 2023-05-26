import React from 'react'
import "../allcss/mystuff.css"
import logo from "../assets/primeclone.png"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MyStuff() {
  return (
    <div className='mystuff'>
        <div className='mystuff-logo'>
            <div>My Subscriptions</div>
            <div><img src={logo} /></div>
        </div>
        <div>
            Manage my channel subscription <FontAwesomeIcon className="row-button-icon" icon={faAngleRight} />
        </div>
    </div>
  )
}

export default MyStuff