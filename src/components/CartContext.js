import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"
const client = Client.buildClient({
  domain: process.env.GATSBY_STORE_MY_SHOPIFY,
  storefrontAccessToken: process.env.GATSBY_STORE_TOKEN,
})

export const CartContext = createContext({
  checkout: {},
  handleCheckout: {},
})

export const CartProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(false)

  useEffect(() => {
    if (!checkout) {
      (async () => {
        const newCheckout = await client.checkout.create()
        setCheckout(newCheckout)
        return newCheckout
      })()
    }
  })

  const handleCheckout = (event, variant) => {
    event.preventDefault()
    const lineItem = {
      variantId: variant.shopifyId,
      quantity: 1
    }
    client.checkout.addLineItems(checkout.id, lineItem).then((checkout) => {
      window.location.href = checkout.webUrl
    });
  }

  return (
    <CartContext.Provider value={{checkout, handleCheckout}}>
      {children}
    </CartContext.Provider>
  )
}