import React, {} from "react"
import Navbar from "../Components/Navbar"
import OccasionGift1 from "../Images/OccasionGift1.jpg"
import OccasionGift2 from "../Images/OccasionGift2.jpg"
import HerGift1 from "../Images/HerGift1.jpg"
import HerGift2 from "../Images/HerGift2.jpg"
import HisGift1 from "../Images/HisGift1.jpg"
import HisGift2 from "../Images/HisGift2.jpg"

export default function Wishlist({userExists, wishlist, setWishlist, logIndex, setWishlistSituatuion, setMakeWish, makeWish, wishlistSituation} ) {
  const handleWish = (event) => {
    event.preventDefault();
    const {id, name} = event.target[0];
    const newSitrep = {[name]:'+'}
    const newWishClass = {[name]:'makeawish'}
    console.log(name, newSitrep, newWishClass, makeWish, wishlistSituation)
    const newSituation = Object.assign(wishlistSituation, newSitrep);
    const newMadeWish = Object.assign(makeWish, newWishClass);
    setWishlistSituatuion(newSituation);
    setMakeWish(newMadeWish);
    const newWishlist = wishlist.map((data) => {
      return data;
    });
    newWishlist[logIndex-1].splice(id, 1)
    if(newWishlist[logIndex-1].length === 0){
      newWishlist[logIndex-1].push("");
    }
    setWishlist(newWishlist);
  }
  return (
    <div id="wishlistmaincontainer">
      <div className="wishlistcont">
        {wishlist[logIndex-1].map((wish, index) => {
          console.log(wish)
          if(wish == ""){
            return (
              <div className="EmptyWishlist" key={-1-index}>Your wishlist is empty!</div>
            );
          }else{
            if(wish[1]==="OccasionGift1"){
              return <div key={index} className="wishlistitemCont" id={wish[3]}>
                <img src={OccasionGift1} alt="GiftForOccasion"></img>
                <form className="wishlisttextCont" onSubmit={handleWish}>
                  <div className="text">{wish[0]} - {wish[2]}$</div>
                  <button id={index} name={wish[3]}>Remove From Wishlist</button>
                </form>
              </div>;
            }
            else if(wish[1]==="OccasionGift2"){
              return <div key={index} className="wishlistitemCont" id={wish[3]}>
                <img src={OccasionGift2} alt="GiftForOccasion"></img>
                <form className="wishlisttextCont" onSubmit={handleWish}>
                  <div className="text">{wish[0]} - {wish[2]}$</div>
                  <button id={index} name={wish[3]}>Remove From Wishlist</button>
                </form>
              </div>;
            }
            else if(wish[1]==="HerGift1"){
              return <div key={index} className="wishlistitemCont" id={wish[3]}>
                <img src={HerGift1} alt="GiftForHer"></img>
                <form className="wishlisttextCont" onSubmit={handleWish}>
                  <div className="text">{wish[0]} - {wish[2]}$</div>
                  <button id={index} name={wish[3]}>Remove From Wishlist</button>
                </form>
              </div>;
            }
            else if(wish[1]==="HerGift2"){
              return <div key={index} className="wishlistitemCont" id={wish[3]}>
                <img src={HerGift2} alt="GiftForHer"></img>
                <form className="wishlisttextCont" onSubmit={handleWish}>
                  <div className="text">{wish[0]} - {wish[2]}$</div>
                  <button id={index} name={wish[3]}>Remove From Wishlist</button>
                </form>
              </div>;
            }
            else if(wish[1]==="HisGift1"){
              return <div key={index} className="wishlistitemCont" id={wish[3]}>
                <img src={HisGift1} alt="GiftForHim"></img>
                <form className="wishlisttextCont" onSubmit={handleWish}>
                  <div className="text">{wish[0]} - {wish[2]}$</div>
                  <button id={index} name={wish[3]}>Remove From Wishlist</button>
                </form>
              </div>;
            }
            else if(wish[1]==="HisGift2"){
              return <div key={index} className="wishlistitemCont" id={wish[3]}>
                <img src={HisGift2} alt="GiftForHim"></img>
                <form className="wishlisttextCont" onSubmit={handleWish}>
                  <div className="text">{wish[0]} - {wish[2]}$</div>
                  <button id={index} name={wish[3]}>Remove From Wishlist</button>
                </form>
              </div>;
            }
          }
        })}
      </div>
      <Navbar userExists={userExists} />
    </div>
  )
}
