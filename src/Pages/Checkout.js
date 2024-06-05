import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "../Components/Navbar"

export default function Checkout( userExists) {
  return (
    <div>
      <div>
        <PayPalScriptProvider options={{ currency: "USD", "client-id":"AWmT1Jvje2nRcycvEPNHLuBfsv3TIPkAGWFY5KzzMyF0toQ18MeGhPnxeCemYbXBwoUnvs6hvY8rZFMi"}}>
          <PayPalButtons/>
        </PayPalScriptProvider>
      </div>
      
      <Navbar userExists={userExists} />
    </div>
  )
}
