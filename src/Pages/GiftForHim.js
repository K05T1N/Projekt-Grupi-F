import React from "react"
import Navbar from "../Components/Navbar"
import HisGift1 from "../Images/HisGift1.jpg"
import HisGift2 from "../Images/HisGift2.jpg"

export default function User() {
  return (
    <div id="hermaincontainer">
      <div className="maincont">
        <div className="shopGrid">
          <div className="imgshopcont">
            <img src={HisGift1}></img>
            <div>Zippo Lighter</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HisGift2}></img>
            <div>Cuban Cigars</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HisGift1}></img>
            <div>Zippo Lighter</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HisGift2}></img>
            <div>Cuban Cigars</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HisGift2}></img>
            <div>Cuban Cigars</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HisGift1}></img>
            <div>Zippo Lighter</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HisGift2}></img>
            <div>Cuban Cigars</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HisGift1}></img>
            <div>Zippo Lighter</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}
