import React from "react"
import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"

export const Header = () => (
  <header>
    <div className="container">
      <div className="nav-brand">
        <Link to="/">
          <h1>The Lagoon Store</h1>
        </Link>
        <p>Everything for your Reef adventure</p>
      </div>
      <div className="cart">
        <CartWidget />
      </div>
    </div>
  </header>
)
