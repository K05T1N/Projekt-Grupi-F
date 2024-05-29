import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbarcontainer">
      <div className="leftsidenav">
        <Link to="/">Home</Link>
      </div>
      <div className="rightsidenav">
        <Link to="/ShopCart">Shopping Cart</Link>
        <Link to="/Wishlist">Wishlist</Link>
        <Link to="/User">User</Link>
      </div>
    </div>
  )
}
