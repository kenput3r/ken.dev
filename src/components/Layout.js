import * as React from "react"
import "./normalize.css"
import "./style.css"
import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ({ children, showHeader }) => {
  return (
    <>
      <div>
        {showHeader && <Header /> }
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout