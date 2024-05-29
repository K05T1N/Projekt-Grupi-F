import React from "react"
import Navbar from "../Components/Navbar"
import OccasionGift1 from "../Images/OccasionGift1.jpg"
import OccasionGift2 from "../Images/OccasionGift2.jpg"

export default function User() {
  return (
    <div id="hermaincontainer">
      <div className="maincont">
        <div className="shopGrid">
          <div className="imgshopcont">
            <img src={OccasionGift2}></img>
            <div>Vinyl Player</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift1}></img>
            <div>Photo Album</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift2}></img>
            <div>Vinyl Player</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift1}></img>
            <div>Photo Album</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift1}></img>
            <div>Photo Album</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift2}></img>
            <div>Vinyl Player</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift1}></img>
            <div>Photo Album</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift2}></img>
            <div>Vinyl Player</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}
