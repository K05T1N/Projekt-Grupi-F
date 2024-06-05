import React, { useState } from 'react'
import OccasionGift1 from "../Images/OccasionGift1.jpg"
import OccasionGift2 from "../Images/OccasionGift2.jpg"
import HerGift1 from "../Images/HerGift1.jpg"
import HerGift2 from "../Images/HerGift2.jpg"
import HisGift1 from "../Images/HisGift1.jpg"
import HisGift2 from "../Images/HisGift2.jpg"
// 0-name , 1-src , 2-id, 3-price
const Overlay = ({ isVisible, onClose, details, shopcart, setShopcart,  logIndex }) => {
    const [shopCounter, setShopCounter] = useState(0)
    const decrement = (e) => {
        e.preventDefault();
        setShopCounter(shopCounter-1)
    };
    const increment = (e) => {
        e.preventDefault();
        setShopCounter(shopCounter+1)
    };
    const closeDown = (e) =>{
        e.preventDefault();
        setShopCounter(0);
        onClose();
    };
    const handleWish = (e) => {
        e.preventDefault();
        const {name, value, id, className} = e.target;
        console.log("attempted cart add", name, value, id, className);
        let overlap = true;
        let foundOverlap = 0;
        for (let i = 0 ; i < shopcart[logIndex-1].length ; i ++){
            console.log("Tested Data:", shopcart[logIndex-1][i][3], "Attempted Input:" , id)
            if(shopcart[logIndex-1][i][3] === id){
              overlap = true;
              foundOverlap = i;
              break;
            }
            else{
              overlap = false;
            }
          }
          if(overlap === true){
            console.log(shopcart);
            console.log("overlap brudda");
            shopcart[logIndex-1][foundOverlap][4] = shopcart[logIndex-1][foundOverlap][4] + shopCounter;
            setShopCounter(0);
          }
          else{
            const newShopcart = shopcart.map((data, i) => {
              if (i === logIndex-1) {
                if (shopcart[logIndex-1] == ""){
                  data = [[name, value, className, id, shopCounter]];
                  setShopCounter(0);
                  return data;
                }
                else{
                  data.push([name, value, className, id, shopCounter]);
                  setShopCounter(0);
                  return data;
                }
              }
              else {
                return data;
              }
            });
            setShopcart(newShopcart);
            console.log(shopcart);
          }
      }
    
    if (!isVisible) return null;
    if(details[1]==="OccasionGift1"){
    return (
        <div className="buyersUnderOverlay" onClick={closeDown}>
            <div className="buyersOverlay" onClick={(e) => e.stopPropagation()}>
                <div className="underlay" id={details[2]}>
                    <img src={OccasionGift1} alt="GiftForOccasion"></img>
                    <form className="buyertextCont">
                        <div className="text">{details[0]} - {details[3]}$</div>
                        <div className='other'>
                            <button onClick={decrement}>-</button>
                            <span className='text'>{shopCounter}</span>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={handleWish} name={details[0]} value={details[1]}  id={details[2]} className={details[3]}>Add Items To Cart</button>
                        </form>
                </div>;
            </div>
        </div>
        );
    }
    else if(details[1]==="OccasionGift2"){
        return (
            <div className="buyersUnderOverlay" onClick={closeDown}>
                <div className="buyersOverlay" onClick={(e) => e.stopPropagation()}>
                    <div className="underlay" id={details[2]}>
                        <img src={OccasionGift2} alt="GiftForOccasion"></img>
                        <form className="buyertextCont">
                        <div className="text">{details[0]} - {details[3]}$</div>
                        <div className='other'>
                            <button onClick={decrement}>-</button>
                            <span className='text'>{shopCounter}</span>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={handleWish} name={details[0]} value={details[1]}  id={details[2]} className={details[3]}>Add Items To Cart</button>
                        </form>
                    </div>;
                </div>
            </div>
        );
    }
    else if(details[1]==="HerGift1"){
        return (
            <div className="buyersUnderOverlay" onClick={closeDown}>
                <div className="buyersOverlay" onClick={(e) => e.stopPropagation()}>
                    <div className="underlay" id={details[2]}>
                        <img src={HerGift1} alt="GiftForHer"></img>
                        <form className="buyertextCont">
                        <div className="text">{details[0]} - {details[3]}$</div>
                        <div className='other'>
                            <button onClick={decrement}>-</button>
                            <span className='text'>{shopCounter}</span>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={handleWish} name={details[0]} value={details[1]}  id={details[2]} className={details[3]}>Add Items To Cart</button>
                        </form>
                    </div>;
                </div>
            </div>
            );
    }
    else if(details[1]==="HerGift2"){
        return (
            <div className="buyersUnderOverlay" onClick={closeDown}>
                <div className="buyersOverlay" onClick={(e) => e.stopPropagation()}>
                    <div className="underlay" id={details[2]}>
                        <img src={HerGift2} alt="GiftForHer"></img>
                        <form className="buyertextCont">
                        <div className="text">{details[0]} - {details[3]}$</div>
                        <div className='other'>
                            <button onClick={decrement}>-</button>
                            <span className='text'>{shopCounter}</span>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={handleWish} name={details[0]} value={details[1]}  id={details[2]} className={details[3]}>Add Items To Cart</button>
                        </form>
                    </div>;
                </div>
            </div>
            );
    }
    else if(details[1]==="HisGift1"){
        return (
            <div className="buyersUnderOverlay" onClick={closeDown}>
                <div className="buyersOverlay" onClick={(e) => e.stopPropagation()}>
                    <div className="underlay" id={details[2]}>
                        <img src={HisGift1} alt="GiftForHim"></img>
                        <form className="buyertextCont">
                        <div className="text">{details[0]} - {details[3]}$</div>
                        <div className='other'>
                            <button onClick={decrement}>-</button>
                            <span className='text'>{shopCounter}</span>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={handleWish} name={details[0]} value={details[1]}  id={details[2]} className={details[3]}>Add Items To Cart</button>
                        </form>
                    </div>;
                </div>
            </div>
            );
    }
    else if(details[1]==="HisGift2"){
        return (
            <div className="buyersUnderOverlay" onClick={closeDown}>
                <div className="buyersOverlay" onClick={(e) => e.stopPropagation()}>
                    <div className="underlay" id={details[2]}>
                        <img src={HisGift2} alt="GiftForHim"></img>
                        <form className="buyertextCont">
                        <div className="text">{details[0]} - {details[3]}$</div>
                        <div className='other'>
                            <button onClick={decrement}>-</button>
                            <span className='text'>{shopCounter}</span>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={handleWish} name={details[0]} value={details[1]}  id={details[2]} className={details[3]}>Add Items To Cart</button>
                        </form>
                    </div>;
                </div>
            </div>
        );
    }
  };
  export default Overlay;
