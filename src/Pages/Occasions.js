import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import OccasionGift1 from "../Images/OccasionGift1.jpg"
import OccasionGift2 from "../Images/OccasionGift2.jpg"
import Slideshow from "../Components/Slideshow"
import Overlay from "../Components/Overlay"
import { useNavigate } from "react-router-dom"

export default function Occasions({userExists, wishlist, setWishlist, logIndex, makeWish, setMakeWish, wishlistSituation, setWishlistSituatuion, shopcart, setShopcart}) {
  const Navigate = useNavigate();
  const [buyOver, setBuyOver] = useState([""]);
  const [buyOverVisible, setBuyOverVisible] = useState(false);
  const handleWish = (event) => {
    event.preventDefault();
    const {name, alt, id, max} = event.target[0];
    console.log("attempted wish", name, alt, id, max);
    if(userExists === true){
      let overlap = true;
      let foundOverlap = 0;
      for (let i = 0 ; i < wishlist[logIndex-1].length ; i ++){
        console.log("Tested Data:", wishlist[logIndex-1][i][3], "Attempted Input:" , id)
        if(wishlist[logIndex-1][i][3] === id){
          overlap = true;
          foundOverlap = i;
          break;
        }
        else{
          overlap = false;
        }
      }
      if(overlap === true){
        const newWishlist = wishlist.map((data) => {
          return data;
        });
        newWishlist[logIndex-1].splice(foundOverlap, 1)
        if(newWishlist[logIndex-1].length === 0){
          newWishlist[logIndex-1].push("");
        }
        setWishlist(newWishlist);
        const newSitrep = {[id]:'+'}
        const newSituation = Object.assign(wishlistSituation, newSitrep);
        setWishlistSituatuion(newSituation);
        const newWishClass = {[id]:'makeawish'}
        const newMadeWish = Object.assign(makeWish, newWishClass);
        setMakeWish(newMadeWish);
        console.log(wishlist);
      }
      else{
        const newWishlist = wishlist.map((data, i) => {
          if (i === logIndex-1) {
            if (wishlist[logIndex-1] == ""){
              data = [[name, alt, max, id]];
              return data;
            }
            else{
              data.push([name, alt, max, id]);
              return data;
            }
          }
          else {
            return data;
          }
        });
        setWishlist(newWishlist);
        const newSitrep = {[id]:'-'}
        const newSituation = Object.assign(wishlistSituation, newSitrep);
        setWishlistSituatuion(newSituation);
        const newWishClass = {[id]:'makeawish inverse'}
        const newMadeWish = Object.assign(makeWish, newWishClass);
        setMakeWish(newMadeWish);
        console.log(wishlist);
      }
    }else{
      Navigate("/LogIn")
    }
  }
  const handleBuy = (event) => {
    if(userExists === true){
      event.preventDefault();
      console.log(event.target[0]);
      const {name, alt, id, max} = event.target[0];
      console.log("attempted buy", name, alt, id, max);
      setBuyOver([name, alt, id, max]);
      setBuyOverVisible(true)
    }
    else{
      Navigate("/LogIn")
    }
  }
  const closeOverlay = () => {
    setBuyOverVisible(false);
    setBuyOver([""]);
  }
  return (
    <div id="hermaincontainer">
      <Slideshow />
      <div className="maincont">
        <div className="shopGrid">
          <div className="imgshopcont">
            <img src={OccasionGift2} alt="GiftForOccasion"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Vinyl Player #1" alt="OccasionGift2" id="Vinyl1" max={80.99} disabled/>
              <button>Vinyl Player #1 - 80.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Vinyl1}>
              <input type="text" value={""} name="Vinyl Player #1" alt="OccasionGift2" id="Vinyl1" max={80.99} disabled/>
              <button>Wishlist {wishlistSituation.Vinyl1}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift1} alt="GiftForOccasion"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Photo Album #1" alt="OccasionGift1" id="Photo1" max={64.99} disabled/>
              <button>Photo Album #1 - 64.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Photo1}>
              <input type="text" value={""} name="Photo Album #1" alt="OccasionGift1" id="Photo1" max={64.99} disabled/>
              <button>Wishlist {wishlistSituation.Photo1}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift2} alt="GiftForOccasion"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Vinyl Player #4" alt="OccasionGift2" id="Vinyl4" max={94.99} disabled/>
              <button>Vinyl Player #4 - 94.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Vinyl4}>
              <input type="text" value={""} name="Vinyl Player #4" alt="OccasionGift2" id="Vinyl4" max={94.99} disabled/>
              <button>Wishlist {wishlistSituation.Vinyl4}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift1} alt="GiftForOccasion"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Photo Album #3" alt="OccasionGift1" id="Photo3" max={40.99} disabled/>
              <button>Photo Album #3 - 40.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Photo3}>
              <input type="text" value={""} name="Photo Album #3" alt="OccasionGift1" id="Photo3" max={40.99} disabled/>
              <button>Wishlist {wishlistSituation.Photo3}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift1} alt="GiftForOccasion"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Photo Album #4" alt="OccasionGift1" id="Photo4" max={24.99} disabled/>
              <button>Photo Album #4 - 24.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Photo4}>
              <input type="text" value={""} name="Photo Album #4" alt="OccasionGift1" id="Photo4" max={24.99} disabled/>
              <button>Wishlist {wishlistSituation.Photo4}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift2} alt="GiftForOccasion"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Vinyl Player #2" alt="OccasionGift2" id="Vinyl2" max={50.99} disabled/>
              <button>Vinyl Player #2 - 50.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Vinyl2}>
              <input type="text" value={""} name="Vinyl Player #2" alt="OccasionGift2" id="Vinyl2" max={50.99} disabled/>
              <button>Wishlist {wishlistSituation.Vinyl2}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={OccasionGift1} alt="GiftForOccasion"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Photo Album #2" alt="OccasionGift1" id="Photo2" max={124.99} disabled/>
              <button>Photo Album #2 - 124.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Photo2}>
              <input type="text" value={""} name="Photo Album #2" alt="OccasionGift1" id="Photo2" max={124.99} disabled/>
              <button>Wishlist {wishlistSituation.Photo2}</button>
            </form>
          </div>
          <div className="imgshopcont">
          <img src={OccasionGift2} alt="GiftForOccasion"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Vinyl Player #3" alt="OccasionGift2" id="Vinyl3" max={72.49} disabled/>
              <button>Vinyl Player #3 - 72.49$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Vinyl3}>
              <input type="text" value={""} name="Vinyl Player #3" alt="OccasionGift2" id="Vinyl3" max={72.49} disabled/>
              <button>Wishlist {wishlistSituation.Vinyl3}</button>
            </form>
          </div>
        </div>
      </div>
      <Overlay isVisible={buyOverVisible} onClose={closeOverlay} details={buyOver} shopcart={shopcart} setShopcart={setShopcart} logIndex={logIndex} />
      <Navbar userExists={userExists} />
    </div>
  )
}
