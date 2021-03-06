import React from "react"
import useFetch from "react-fetch-hook"
import { Loader } from "../shared/Loader"
import { Link } from "react-router-dom"
import { useOrder } from "./useOrder"

interface OrderSummaryProps {
  useOrderHook?: typeof useOrder
}

export const OrderSummary = ({useOrderHook = useOrder}:OrderSummaryProps) => {
  let {isLoading, order} = useOrderHook()

  if (isLoading) {
    return <Loader />
  }

  if (!order) {
    return <div>Couldn't load order info.</div>
  }

  return (
    <section className="nes-container with-title">
      <h1 className="title">Order Summary</h1>
      <div className="nes-container is-rounded order-summary-container">
        <ul className="nes-list is-circle">
          {order.products.map((product) => {
            return <li key={product.name}>{product.name}</li>
          })}
        </ul>
      </div>
      <br />
      <h1 className="title">Randomly Generated Reef Address</h1>
      <div className="nes-container is-rounded order-summary-container">
          {"5EEkgGcDnpgx9x9KQmgs6MzQFdEDdLMacWchzx6D4Hsyp68M"}
      </div>
      <Link to="/">
        <button className="nes-btn is-primary">Back to the store</button>
      </Link>
    </section>
  )
}
