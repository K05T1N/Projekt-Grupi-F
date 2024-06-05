import React from "react"
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom"
import ForHer from "../Images/ForHer.jpg"
import ForHim from "../Images/ForHim.jpg"
import ForOccasion from "../Images/ForOccasion.jpg"
import Slideshow from "../Components/Slideshow"

export default function Home( {userExists} ) {
  return (
    <div id="homemaincontainer">
      <Slideshow />
      <div className="maincont">
        <div className="flexcont">
          <div>
            <Link to="/Forher">
              <div> FOR HER </div>
              <div className="imgcont">
                <img src={ForHer} alt="HerGifts"></img>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Forhim">
              <div> FOR HIM</div>
              <div className="imgcont">
                <img src={ForHim} alt="HisGifts"></img>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Occasions">
              <div> OCCASIONS </div>
              <div className="imgcont">
                <img src={ForOccasion} alt="OcassionsGifts"></img>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Navbar userExists={userExists} />
    </div>
  )
}
