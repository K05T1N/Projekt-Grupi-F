import React from 'react'

export default function Navbar() {
  return (
    <div className='navbarcontainer'>
      <div className='leftsidenav'>
        <a >Home</a>
      </div>
      <div className='rightsidenav'>
        <a >Shopping Cart</a>
        <a >Wishlist</a>
        <a >User</a>
      </div>
    </div>
  )
}
