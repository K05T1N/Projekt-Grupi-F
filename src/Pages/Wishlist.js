import React from "react"
import Navbar from "../Components/Navbar"

export default function Wishlist() {
  return (
    <div id="wishlistmaincontainer">
      <Navbar />
      <div className="maincont">
        Gift Shop App: Product Catalog: Display a catalog of products available
        for purchase, categorized by type (e.g., gifts for him, gifts for her,
        occasions). Shopping Cart: Allow users to add items to a shopping cart
        and proceed to checkout when ready to purchase. User Accounts: Implement
        user accounts where customers can save their shipping addresses, view
        order history, and track package deliveries. Wishlist: Enable users to
        create and manage wishlists, saving items they're interested in for
        future purchase or sharing with others. Payment Integration: Integrate a
        payment gateway to securely process online payments for orders.
        Discounts and Promotions: Implement a system for applying discounts,
        promo codes, and special offers during checkout to
        incentivize purchases.
      </div>
    </div>
  )
}
