import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import ShopCart from "./Pages/ShopCart"
import Checkout from "./Pages/Checkout"
import User from "./Pages/User"
import LogIn from "./Pages/LogIn"
import Wishlist from "./Pages/Wishlist"
import "./Whole.css"
export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ShopCart" element={<ShopCart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/User" element={<User />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Wishlist" element={<Wishlist />} />
    </Routes>
  )
}
