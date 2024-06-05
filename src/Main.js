import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import ShopCart from "./Pages/ShopCart"
import Checkout from "./Pages/Checkout"
import User from "./Pages/User"
import LogIn from "./Pages/LogIn"
import SignUp from "./Pages/SignUp"
import Wishlist from "./Pages/Wishlist"
import ForHer from "./Pages/GiftForHer"
import ForHim from "./Pages/GiftForHim"
import Occasions from "./Pages/Occasions"
import "./Whole.css"
export default function Main() {
  const [userExists, setUserExists] = useState(false);
  const [userData, setUserData] = useState([{name:"Kostin", email:"kostinfloqi15@gmail.com", password:"1qaz@WSX", shippingaddress:""}, {name:"NotKostin", email:"kostinfloqi14@gmail.com", password:"password", shippingaddress:""}]);
  const [logIndex, setLogIndex] = useState(0);
  const [makeWish, setMakeWish] = useState({Vinyl1:"makeawish", Vinyl2:"makeawish", Vinyl3:"makeawish", Vinyl4:"makeawish", Photo1:"makeawish", Photo2:"makeawish", Photo3:"makeawish", Photo4:"makeawish", Flower1:"makeawish", Flower2:"makeawish", Flower3:"makeawish", Flower4:"makeawish", Bag1:"makeawish", Bag2:"makeawish", Bag3:"makeawish", Bag4:"makeawish", Cigar1:"makeawish", Cigar2:"makeawish", Cigar3:"makeawish", Cigar4:"makeawish", Lighter1:"makeawish", Lighter2:"makeawish", Lighter3:"makeawish", Lighter4:"makeawish"});
  const [wishlistSituation, setWishlistSituatuion] = useState({Vinyl1:"+", Vinyl2:"+", Vinyl3:"+", Vinyl4:"+", Photo1:"+", Photo2:"+", Photo3:"+", Photo4:"+", Flower1:"+", Flower2:"+", Flower3:"+", Flower4:"+", Bag1:"+", Bag2:"+", Bag3:"+", Bag4:"+", Cigar1:"+", Cigar2:"+", Cigar3:"+", Cigar4:"+", Lighter1:"+", Lighter2:"+", Lighter3:"+", Lighter4:"+"});
  const [wishlist, setWishlist] = useState([[""],[""]])
  const [shopcart, setShopcart] = useState([[""],[""]])
  return (
    <Routes>
      <Route path="/" element={<Home userExists={userExists} />} />
      <Route path="/ShopCart" element={<ShopCart userExists={userExists} logIndex={logIndex} shopcart={shopcart} setShopcart={setShopcart}/>} />
      <Route path="/Checkout" element={<Checkout userExists={userExists} logIndex={logIndex} />} />
      <Route path="/User" element={<User userExists={userExists} userData={userData} setUserData={setUserData} logIndex={logIndex} setUserExists={setUserExists} setLogIndex={setLogIndex}/>} />
      <Route path="/LogIn" element={<LogIn userExists={userExists} userData={userData} setUserExists={setUserExists} setLogIndex={setLogIndex}/>}/>
      <Route path="/SignUp" element={<SignUp userExists={userExists} userData={userData} setUserData={setUserData} setUserExists={setUserExists} setLogIndex={setLogIndex} setWishlist={setWishlist} wishlist={wishlist}/>}/>
      <Route path="/Wishlist" element={<Wishlist userExists={userExists} logIndex={logIndex} setWishlist={setWishlist} wishlist={wishlist}  makeWish={makeWish} setMakeWish={setMakeWish} wishlistSituation={wishlistSituation} setWishlistSituatuion={setWishlistSituatuion}/>} />
      <Route path="/Forher" element={<ForHer userExists={userExists} logIndex={logIndex} setWishlist={setWishlist} wishlist={wishlist} makeWish={makeWish} setMakeWish={setMakeWish} wishlistSituation={wishlistSituation} setWishlistSituatuion={setWishlistSituatuion} shopcart={shopcart} setShopcart={setShopcart} />} />
      <Route path="/Forhim" element={<ForHim userExists={userExists} logIndex={logIndex} setWishlist={setWishlist} wishlist={wishlist} makeWish={makeWish} setMakeWish={setMakeWish} wishlistSituation={wishlistSituation} setWishlistSituatuion={setWishlistSituatuion} shopcart={shopcart} setShopcart={setShopcart} />} />
      <Route path="/Occasions" element={<Occasions userExists={userExists} logIndex={logIndex} setWishlist={setWishlist} wishlist={wishlist} makeWish={makeWish} setMakeWish={setMakeWish} wishlistSituation={wishlistSituation} setWishlistSituatuion={setWishlistSituatuion} shopcart={shopcart} setShopcart={setShopcart} />} />
    </Routes>
  )
}
