import React from "react"
import HisGift1 from "../Images/HisGift1.jpg"
import HisGift2 from "../Images/HisGift2.jpg"
import OccasionGift1 from "../Images/OccasionGift1.jpg"
import OccasionGift2 from "../Images/OccasionGift2.jpg"
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom"
import ForHer from "../Images/ForHer.jpg"
import ForHim from "../Images/ForHim.jpg"
import ForOccasion from "../Images/ForOccasion.jpg"
import HerSlide from "../Images/HerSlide.jpg"
import HisSlide from "../Images/HisSlide.jpg"
import OccasionSlide from "../Images/OccasionSlide.jpg"
export default function Home() {
  return (
    <div id="homemaincontainer">
      <div className="maincont">
        <div className="flexcont">
          <div>
            <Link to="/Forher">
              <div> FOR HER </div>
              <div className="imgcont">
                <img src={ForHer}></img>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Forhim">
              <div> FOR HIM</div>
              <div className="imgcont">
                <img src={ForHim}></img>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Occasions">
              <div> OCCASIONS </div>
              <div className="imgcont">
                <img src={ForOccasion}></img>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}
