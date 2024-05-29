import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import ShopCart from "./Pages/ShopCart"
import Checkout from "./Pages/Checkout"
import User from "./Pages/User"
import LogIn from "./Pages/LogIn"
import Wishlist from "./Pages/Wishlist"
import ForHer from "./Pages/GiftForHer"
import ForHim from "./Pages/GiftForHim"
import Occasions from "./Pages/Occasions"
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
      <Route path="/Forher" element={<ForHer />} />
      <Route path="/Forhim" element={<ForHim />} />
      <Route path="/Occasions" element={<Occasions />} />
    </Routes>
  )
}
