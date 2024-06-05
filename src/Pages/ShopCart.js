import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import OccasionGift1 from "../Images/OccasionGift1.jpg"
import OccasionGift2 from "../Images/OccasionGift2.jpg"
import HerGift1 from "../Images/HerGift1.jpg"
import HerGift2 from "../Images/HerGift2.jpg"
import HisGift1 from "../Images/HisGift1.jpg"
import HisGift2 from "../Images/HisGift2.jpg"
// 0-name , 1-src , 2-price, 3-id, 4- item count

export default function ShopCart({userExists, logIndex, shopcart, setShopcart} ) {
  const [totalPaid, setTotalPaid] = useState(0);
  const [buttonText, setButtonText] = useState("Calculate Total")
  let check = false;
  let roundabout = 0;
  const handleStoreRemove = (event) => {
    event.preventDefault();
    const {id, name} = event.target[0];
    console.log(name, id)
    const newShopcart = shopcart.map((data) => {
      return data;
    });
    newShopcart[logIndex-1].splice(id, 1)
    if(newShopcart[logIndex-1].length === 0){
      newShopcart[logIndex-1].push("");
    }
    setShopcart(newShopcart);
  }
  const doTheShopping = (e) => {
    e.preventDefault();
    const {value} = e.target;
    setTotalPaid(totalPaid + value)
  }
  return (
    <div id="wishlistmaincontainer">
      <div className="wishlistcont">
        {shopcart[logIndex-1].map((cart, index) => {
          console.log(cart)
          if(cart == ""){
            return (
              <div className="EmptyWishlist" key={-1-index}>Your shoppingcart is empty!</div>
            );
          }else{
            if(cart[1]==="OccasionGift1"){
              return <div key={index} className="wishlistitemCont" id={cart[3]}>
                <img src={OccasionGift1} alt="GiftForOccasion"></img>
                <form className="wishlisttextCont" onSubmit={handleStoreRemove} >
                  <div className="text">{cart[0]}<br/>{cart[2]}$ Per Item<br/>Total: {Math.round(cart[2]*cart[4] * 100) / 100}$ for {cart[4]} Items</div>
                  <button id={index} name={cart[3]}>Remove Item From Cart</button>
                </form>
              </div>;
            }
            else if(cart[1]==="OccasionGift2"){
              return <div key={index} className="wishlistitemCont" id={cart[3]}>
                <img src={OccasionGift2} alt="GiftForOccasion"></img>
                <form className="wishlisttextCont" onSubmit={handleStoreRemove} >
                  <div className="text">{cart[0]}<br/>{cart[2]}$ Per Item<br/>Total: {Math.round(cart[2]*cart[4] * 100) / 100}$ for {cart[4]} Items</div>
                  <button id={index} name={cart[3]}>Remove Item From Cart</button>
                </form>
              </div>;
            }
            else if(cart[1]==="HerGift1"){
              return <div key={index} className="wishlistitemCont" id={cart[3]}>
                <img src={HerGift1} alt="GiftForHer"></img>
                <form className="wishlisttextCont" onSubmit={handleStoreRemove} >
                  <div className="text">{cart[0]}<br/>{cart[2]}$ Per Item<br/>Total: {Math.round(cart[2]*cart[4] * 100) / 100}$ for {cart[4]} Items</div>
                  <button id={index} name={cart[3]}>Remove Item From Cart</button>
                </form>
              </div>;
            }
            else if(cart[1]==="HerGift2"){
              return <div key={index} className="wishlistitemCont" id={cart[3]}>
                <img src={HerGift2} alt="GiftForHer"></img>
                <form className="wishlisttextCont" onSubmit={handleStoreRemove} >
                  <div className="text">{cart[0]}<br/>{cart[2]}$ Per Item<br/>Total: {Math.round(cart[2]*cart[4] * 100) / 100}$ for {cart[4]} Items</div>
                  <button id={index} name={cart[3]}>Remove Item From Cart</button>
                </form>
              </div>;
            }
            else if(cart[1]==="HisGift1"){
              return <div key={index} className="wishlistitemCont" id={cart[3]}>
                <img src={HisGift1} alt="GiftForHim"></img> 
                <form className="wishlisttextCont" onSubmit={handleStoreRemove} >
                  <div className="text">{cart[0]}<br/>{cart[2]}$ Per Item<br/>Total: {Math.round(cart[2]*cart[4] * 100) / 100}$ for {cart[4]} Items</div>
                  <button id={index} name={cart[3]}>Remove Item From Cart</button>
                </form>
              </div>;
            }
            else if(cart[1]==="HisGift2"){
              return <div key={index} className="wishlistitemCont" id={cart[3]}>
                <img src={HisGift2} alt="GiftForHim"></img>
                <form className="wishlisttextCont" onSubmit={handleStoreRemove} >
                  <div className="text">{cart[0]}<br/>{cart[2]}$ Per Item<br/>Total: {Math.round(cart[2]*cart[4] * 100) / 100}$ for {cart[4]} Items</div>
                  <button id={index} name={cart[3]}>Remove Item From Cart</button>
                </form>
              </div>;
            }
          }
        })}
        <hr/>
        {shopcart[logIndex-1].map((cart, index) => {
          console.log(cart)
          if(cart == ""){
            return (
              <div className="EmptyWishlist" key={-1-index}>Your shoppingcart is empty!</div>
            );
          }
          else{
            if(check === false){
              check = true;
              setTotalPaid(cart[2]*cart[4]);
              console.log(roundabout);
              console.log(totalPaid);
              return(
                <div key={-2-index}>
                  <form onSubmit={doTheShopping}>
                    <button value={roundabout}>{buttonText}</button>
                  </form>
                </div>
              );
            }
          }
        })}        
      </div>
      <Navbar userExists={userExists} />
    </div>
  )
}
