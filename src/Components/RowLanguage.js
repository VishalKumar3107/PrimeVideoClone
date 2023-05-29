import React from "react";
import one from "../assets/hindi.png"
import two from "../assets/eng.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import six from "../assets/six.png"
import seven from "../assets/seven.png"
import eight from "../assets/eight.png"
import nine from "../assets/nine.png"
import ten from "../assets/ten.png"

function RowLanguage() {
  return (
    <div className="row">
      <h2>
        <span>Prime</span> &nbsp; Watch in Your Language
      </h2>
      <div className="row_container">
        <div className="figure">
          <img className={`row_poster`} src={one} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={two} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={three} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={four} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={five} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={six} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={seven} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={eight} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={nine} alt="Language" />
        </div>
        <div className="figure">
          <img className={`row_poster`} src={ten} alt="Language" />
        </div>
      </div>
    </div>
  );
}

export default RowLanguage;
