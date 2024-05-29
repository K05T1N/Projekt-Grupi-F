import React from "react"
import Navbar from "../Components/Navbar"
import HerGift1 from "../Images/HerGift1.jpg"
import HerGift2 from "../Images/HerGift2.jpg"

export default function User() {
  return (
    <div id="hermaincontainer">
      <div className="maincont">
        <div className="shopGrid">
          <div className="imgshopcont">
            <img src={HerGift1}></img>
            <div>Designer Bag</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HerGift2}></img>
            <div>Bouquet Of Flowers</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HerGift1}></img>
            <div>Designer Bag</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HerGift2}></img>
            <div>Bouquet Of Flowers</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HerGift2}></img>
            <div>Bouquet Of Flowers</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HerGift1}></img>
            <div>Designer Bag</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HerGift2}></img>
            <div>Bouquet Of Flowers</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
          <div className="imgshopcont">
            <img src={HerGift1}></img>
            <div>Designer Bag</div>
            <a className="makeawish">+ Wishlist</a>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}
