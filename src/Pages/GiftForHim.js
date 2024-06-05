import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import HisGift1 from "../Images/HisGift1.jpg"
import HisGift2 from "../Images/HisGift2.jpg"
import Slideshow from "../Components/Slideshow"
import Overlay from "../Components/Overlay"
import { useNavigate } from "react-router-dom"

export default function GiftForHim({userExists, wishlist, setWishlist, logIndex, makeWish, setMakeWish, wishlistSituation, setWishlistSituatuion, shopcart, setShopcart}) {
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
            <img src={HisGift1} alt="GiftForHim"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Zippo Lighter #3" alt="HisGift1" id="Lighter3" max={29.99} disabled/>
              <button>Zippo Lighter #3 - 29.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Lighter3}>
              <input type="text" value={""} name="Zippo Lighter #3" alt="HisGift1" id="Lighter3" max={29.99} disabled/>
              <button>Wishlist {wishlistSituation.Lighter3}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HisGift2} alt="GiftForHim"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Cuban Cigars #2" alt="HisGift2" id="Cigar2" max={71.49} disabled/>
              <button>Cuban Cigars #2 - 71.49$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Cigar2}>
              <input type="text" value={""} name="Cuban Cigars #2" alt="HisGift2" id="Cigar2" max={71.49} disabled/>
              <button>Wishlist {wishlistSituation.Cigar2}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HisGift1} alt="GiftForHim"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Zippo Lighter #4" alt="HisGift1" id="Lighter4" max={139.99} disabled/>
              <button>Zippo Lighter #4 - 139.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Lighter4}>
              <input type="text" value={""} name="Zippo Lighter #4" alt="HisGift1" id="Lighter4" max={139.99} disabled/>
              <button>Wishlist {wishlistSituation.Lighter4}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HisGift2} alt="GiftForHim"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Cuban Cigars #3" alt="HisGift2" id="Cigar3" max={99.99} disabled/>
              <button>Cuban Cigars #3 - 99.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Cigar3}>
              <input type="text" value={""} name="Cuban Cigars #3" alt="HisGift2" id="Cigar3" max={99.99} disabled/>
              <button>Wishlist {wishlistSituation.Cigar3}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HisGift2} alt="GiftForHim"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Cuban Cigars #1" alt="HisGift2" id="Cigar1" max={50.49} disabled/>
              <button>Cuban Cigars #1 - 50.49$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Cigar1}>
              <input type="text" value={""} name="Cuban Cigars #1" alt="HisGift2" id="Cigar1" max={50.49} disabled/>
              <button>Wishlist {wishlistSituation.Cigar1}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HisGift1} alt="GiftForHim"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Zippo Lighter #1" alt="HisGift1" id="Lighter1" max={73.31} disabled/>
              <button>Zippo Lighter #1 - 73.31$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Lighter1}>
              <input type="text" value={""} name="Zippo Lighter #1" alt="HisGift1" id="Lighter1" max={73.31} disabled/>
              <button>Wishlist {wishlistSituation.Lighter1}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HisGift2} alt="GiftForHim"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Cuban Cigars #4" alt="HisGift2" id="Cigar4" max={66.99} disabled/>
              <button>Cuban Cigars #4 - 66.99$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Cigar4}>
              <input type="text" value={""} name="Cuban Cigars #4" alt="HisGift2" id="Cigar4" max={66.99} disabled/>
              <button>Wishlist {wishlistSituation.Cigar4}</button>
            </form>
          </div>
          <div className="imgshopcont">
            <img src={HisGift1} alt="GiftForHim"></img>
            <form onSubmit={handleBuy}  className="makeabuy">
              <input type="text" value={""} name="Zippo Lighter #2" alt="HisGift1" id="Lighter2" max={20.06} disabled/>
              <button>Zippo Lighter #2 - 20.06$</button>
            </form>
            <form onSubmit={handleWish}  className={makeWish.Lighter2}>
              <input type="text" value={""} name="Zippo Lighter #2" alt="HisGift1" id="Lighter2" max={20.06} disabled/>
              <button>Wishlist {wishlistSituation.Lighter2}</button>
            </form>
          </div>
        </div>
      </div>
      <Overlay isVisible={buyOverVisible} onClose={closeOverlay} details={buyOver} shopcart={shopcart} setShopcart={setShopcart} logIndex={logIndex} />
      <Navbar userExists={userExists} />
    </div>
  )
}
