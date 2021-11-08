import { Product } from "../shared/types"

export const getProducts = () => {
  return fetch("https://reef-frontend-product-service.herokuapp.com/products")
    .then((res) => {
      return res.json()
    })
    .catch(console.log)
}

export const getOrder = (id: string) => {
  return fetch(`https://reef-frontend-product-service.herokuapp.com/order/${id}`)
    .then((res) => {
      return res.json()
    })
    .catch(console.log)
}

export interface CheckoutPayload {
  products: Product[]
}

export const postCheckout = (data: CheckoutPayload) => {
  return fetch(`https://reef-frontend-product-service.herokuapp.com/checkout`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json()
    })
    .catch(console.log)
}
