import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import HerGift1 from "../Images/HerGift1.jpg"
import HerGift2 from "../Images/HerGift2.jpg"
import Slideshow from "../Components/Slideshow"
import Overlay from "../Components/Overlay"
import { useNavigate } from "react-router-dom"

export default function GiftForHer({userExists, wishlist, setWishlist, logIndex, makeWish, setMakeWish, wishlistSituation, setWishlistSituatuion, shopcart, setShopcart}) {
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
            <img src={HerGift1} alt="GiftForHer"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Designer Bag #1" alt="HerGift1" id="Bag1" max={33.99} disabled/>
              <button>Designer Bag #1 - 33.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Bag1}>
              <input type="text" value={""} name="Designer Bag #1" alt="HerGift1" id="Bag1" max={33.99} disabled/>
              <button>Wishlist {wishlistSituation.Bag1}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HerGift2} alt="GiftForHer"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Flower Bouque #2" alt="HerGift2" id="Flower2" max={59.99} disabled/>
              <button>Flower Bouque #2 - 59.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Flower2}>
              <input type="text" value={""} name="Flower Bouque #2" alt="HerGift2" id="Flower2" max={59.99} disabled/>
              <button>Wishlist {wishlistSituation.Flower2}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HerGift1} alt="GiftForHer"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Designer Bag #2" alt="HerGift1" id="Bag2" max={79.99} disabled/>
              <button>Designer Bag #2 - 77.24$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Bag2}>
              <input type="text" value={""} name="Designer Bag #2" alt="HerGift1" id="Bag2" max={79.99} disabled/>
              <button>Wishlist {wishlistSituation.Bag2}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HerGift2} alt="GiftForHer"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Flower Bouque #1" alt="HerGift2" id="Flower1" max={99.99} disabled/>
              <button>Flower Bouque #1 - 99.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Flower1}>
              <input type="text" value={""} name="Flower Bouque #1" alt="HerGift2" id="Flower1" max={99.99} disabled/>
              <button>Wishlist {wishlistSituation.Flower1}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HerGift2} alt="GiftForHer"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Flower Bouque #4" alt="HerGift2" id="Flower4" max={14.99} disabled/>
              <button>Flower Bouque #4 - 14.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Flower4}>
              <input type="text" value={""} name="Flower Bouque #4" alt="HerGift2" id="Flower4" max={14.99} disabled/>
              <button>Wishlist {wishlistSituation.Flower4}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HerGift1} alt="GiftForHer"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Designer Bag #3" alt="HerGift1" id="Bag3" max={62.49} disabled/>
              <button>Designer Bag #3 - 62.49$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Bag3}>
              <input type="text" value={""} name="Designer Bag #3" alt="HerGift1" id="Bag3" max={62.49} disabled/>
              <button>Wishlist {wishlistSituation.Bag3}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HerGift2} alt="GiftForHer"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Flower Bouque #3" alt="HerGift2" id="Flower3" max={34.99} disabled/>
              <button>Flower Bouque #3 - 34.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Flower3}>
              <input type="text" value={""} name="Flower Bouque #3" alt="HerGift2" id="Flower3" max={34.99} disabled/>
              <button>Wishlist {wishlistSituation.Flower3}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HerGift1} alt="GiftForHer"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Designer Bag #4" alt="HerGift1" id="Bag4" max={169.99} disabled/>
              <button>Designer Bag #4 - 169.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Bag4}>
              <input type="text" value={""} name="Designer Bag #4" alt="HerGift1" id="Bag4" max={169.99} disabled/>
              <button>Wishlist {wishlistSituation.Bag4}</button>
            </form>
          </div>
        </div>
      </div>
      <Overlay isVisible={buyOverVisible} onClose={closeOverlay} details={buyOver} shopcart={shopcart} setShopcart={setShopcart} logIndex={logIndex} />
      <Navbar userExists={userExists} />
    </div>
  )
}
