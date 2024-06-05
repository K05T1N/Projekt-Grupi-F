import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function Navbar({userExists}) {
  const [toUser, setToUser] = useState("LogIn");
  const [toShopCart, setToShopCart] = useState("LogIn");
  const [toWishList, setToWishList] = useState("LogIn");
  useEffect(() => {
    if(userExists === true){
      setToUser("User");
    }else{
      setToUser("LogIn")
    }
    if(userExists === true){
      setToShopCart("ShopCart");
    }else{
      setToShopCart("LogIn")
    }
    if(userExists === true){
      setToWishList("Wishlist");
    }else{
      setToWishList("LogIn")
    }
  }, [userExists])
  return (
    <div className="navbarcontainer">
      <div className="leftsidenav">
        <Link to="/">Home</Link>
      </div>
      <div className="rightsidenav">
        <Link to={`/${toShopCart}`}>Shopping Cart</Link>
        <Link to={`/${toWishList}`}>Wishlist</Link>
        <Link to={`/${toUser}`}>User</Link>
      </div>
    </div>
  )
}
