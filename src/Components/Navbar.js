import React, { useEffect, useState } from "react";
import "../allcss/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isToggleVisible, setIsToggleVisible] = useState(false);
  const [show, handleShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const handleItemHover = () => {
    setIsToggleVisible(true);
  };

  const handleItemLeave = () => {
    setIsToggleVisible(false);
  };

  return (
    <nav className={`navbar ${show && "navbar__scrolled"}`}>
      <ul className="navbar-items">
        <li className="navbar-item">prime video clone</li>
        <li
          className="navbar-item"
          onMouseEnter={handleItemHover}
          onMouseLeave={handleItemLeave}
        >
          Home <FontAwesomeIcon className="arrowicon" icon={faAngleDown} />
          {isToggleVisible && (
            <span className="toggle-button">
              <div className="toggle-button-home">
                <li>All</li>
                <li>Movies</li>
                <li>TV Shows</li>
              </div>
            </span>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={handleItemHover}
          onMouseLeave={handleItemLeave}
        >
          Store <FontAwesomeIcon className="arrowicon" icon={faAngleDown} />
          {isToggleVisible && <span className="toggle-button">
          <div className="toggle-button-store">
                <li>All</li>
                <li>Rent</li>
                <li>Channels</li>
              </div>
            </span>}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={handleItemHover}
          onMouseLeave={handleItemLeave}
        >
          Categories
          <FontAwesomeIcon className="arrowicon" icon={faAngleDown} />
          {isToggleVisible && <span className="toggle-button">
          <div className="toggle-button-categories">
                <div className="toggle-button-categories-genres">
                    {/* <span>Genres</span> */}
                    <div>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Anime</li>
                        <li>Comedy</li>
                        <li>Drama</li>
                    </div>
                    <div>
                        <li>Fantasy</li>
                        <li>Horror</li>
                        <li>Kids</li>
                        <li>Mystery</li>
                        <li>Romance</li>
                    </div>
                </div>
                <div className="toggle-button-categories-featured">
                    {/* <span>Featured Collections</span> */}
                    <div>
                        <li>Hindi</li>
                        <li>English</li>
                        <li>Telgu</li>
                        <li>Tamil</li>
                        <li>Malyalam</li>
                    </div>
                    <div>
                        <li>Kannada</li>
                        <li>Marathi</li>
                        <li>Punjabi</li>
                        <li>Gujrati</li>
                        <li>Bengali</li>
                    </div>
                </div>
              </div>
            </span>}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={handleItemHover}
          onMouseLeave={handleItemLeave}
        >
          My Stuff <FontAwesomeIcon className="arrowicon" icon={faAngleDown} />
          {isToggleVisible && <span className="toggle-button">
          <div className="toggle-button-mystuff">
                <li>All</li>
                <li>Watchlist</li>
                <li>Rental</li>
              </div>
            </span>}
        </li>
        <li className="navbar-item">User</li>
      </ul>
    </nav>
  );
};

export default Navbar;
