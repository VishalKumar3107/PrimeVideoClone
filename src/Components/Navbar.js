import React, { useEffect, useState } from "react";
import "../allcss/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import userimage from "../assets/user.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";

const Navbar = () => {
  const nav = useNavigate();
  const [category, setCategory] = useState("")
  const [toggleVisibility, setToggleVisibility] = useState({
    home: false,
    store: false,
    categories: false,
    myStuff: false,
    user: false,
  });
  const [show, handleShow] = useState(false);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else setUser(null);
    });
    return () => {
      listen();
    };
  }, []);

  const handleItemHover = (item) => {
    setToggleVisibility((prevState) => ({
      ...prevState,
      [item]: true,
    }));
  };

  const handleItemLeave = (item) => {
    setToggleVisibility((prevState) => ({
      ...prevState,
      [item]: false,
    }));
  };

  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout Successfully");
      })
      .catch(() => {
        console.log("Signout Failed");
      });
  };

  const handlesignIn = () => {
    nav("/auth")
  };

  const handleClick=(category)=>{
    setCategory(category)
    nav(`/category/${category}/`)
  }

  return (
    <nav className={`navbar ${show && "navbar__scrolled"}`}>
      <ul className="navbar-items">
        <li className="navbar-item">
          <Link to={"/"} className="navbar-custom-link">
            prime video clone&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </Link>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleItemHover("home")}
          onMouseLeave={() => handleItemLeave("home")}
        >
          <Link to={"/"} className="navbar-custom-link">
            Home
          </Link>
          <FontAwesomeIcon className="arrowicon" icon={faAngleDown} />
          {toggleVisibility.home && (
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
          onMouseEnter={() => handleItemHover("store")}
          onMouseLeave={() => handleItemLeave("store")}
        >
          <Link to={"/store"} className="navbar-custom-link">
            Store
          </Link>
          <FontAwesomeIcon className="arrowicon" icon={faAngleDown} />
          {toggleVisibility.store && (
            <span className="toggle-button">
              <div className="toggle-button-store">
                <li>All</li>
                <li>Rent</li>
                <li>Channels</li>
              </div>
            </span>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleItemHover("categories")}
          onMouseLeave={() => handleItemLeave("categories")}
        >
          <Link to={"/categories"} className="navbar-custom-link">
            Categories
          </Link>
          <FontAwesomeIcon className="arrowicon" icon={faAngleDown} />
          {toggleVisibility.categories && (
            <span className="toggle-button">
              <div className="toggle-button-categories">
                <div className="toggle-button-categories-genres">
                  {/* <span>Genres</span> */}
                  <div>
                    <li onClick={()=>handleClick('Action')}>Action</li>
                    <li onClick={()=>handleClick('Adventure')}>Adventure</li>
                    <li onClick={()=>handleClick('Action')}>Anime</li>
                    <li onClick={()=>handleClick('Comedy')}>Comedy</li>
                    <li onClick={()=>handleClick('Crime')}>Crime</li>
                  </div>
                  <div>
                    <li onClick={()=>handleClick('Drama')}>Drama</li>
                    <li onClick={()=>handleClick('Horror')}>Horror</li>
                    <li onClick={()=>handleClick('ScienceFiction')}>ScienceFiction</li>
                    <li onClick={()=>handleClick('Thriller')}>Thriller</li>
                    <li onClick={()=>handleClick('Shortfilms')}>Shortfilms</li>
                  </div>
                </div>
                <div className="toggle-button-categories-featured">
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
            </span>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleItemHover("myStuff")}
          onMouseLeave={() => handleItemLeave("myStuff")}
        >
          <Link to={"/my-stuff"} className="navbar-custom-link">
            My Stuff
          </Link>
          <FontAwesomeIcon className="arrowicon" icon={faAngleDown} />
          {toggleVisibility.myStuff && (
            <span className="toggle-button">
              <div className="toggle-button-mystuff">
                <li>All</li>
                <li>Watchlist</li>
                <li>Rental</li>
              </div>
            </span>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleItemHover("user")}
          onMouseLeave={() => handleItemLeave("user")}
        >
          <img className="navbar-user-icon" src={userimage} />
          {toggleVisibility.user && (
            <span className="toggle-button">
              <div className="toggle-button-user">
                <div>
                  <li>Help</li>
                  <li>Watch Anywhere</li>
                  <li>Account & Settings</li>
                  <li>Prime Benifits</li>
                  <li>
                    {user ? (
                      <button onClick={handlesignOut}>Sign Out</button>
                    ) : (
                      <button onClick={handlesignIn}>Sign In</button>
                    )}
                  </li>
                </div>
                <div>
                  <li>
                    {user ? user.displayName : "user"}
                  </li>
                  <li>&nbsp; + &nbsp; &nbsp; Add user</li>
                  <li>Manage Profiles</li>
                  <li>Learn more</li>
                </div>
              </div>
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
