import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../Products/ProductProvider"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"
import { OrderContext } from "./OrderProvider"
import "./Orders.css"

export const OrderList = () => {
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)
  const { orders, getOrders } = useContext(OrderContext)
  const [ orderedProducts, setOrderedProducts] = useState([])

  const addToCartQuantity = (order, cart) => {
    cart.forEach( (product) => {
      if(product.id===order.productId){
        product.quantity++
      }
    })
    return cart
  }

  const calculateLinePrices = (cart) => {
    cart.forEach(product => {
      product.linePrice = product.quantity * product.price
    })
  }

  const addOrderToCart = (order, cart) => {
    const product = products.find(product => product.id === order.productId)
    product.quantity = 1
    cart.push(product)
    return cart
  } 

  const createCart = () => {
    let cart = []

    const currentuser = parseInt(localStorage.getItem("kandy_customer"))

    const userOrders = orders.filter(order => {
      return order.customerId === currentuser})
    
    userOrders.forEach(order => {
      if (cart.some( p => p.id === order.productId)) {
        cart = addToCartQuantity(order, cart)
      }
      else {
        cart = addOrderToCart( order, cart)
      }
    });

    calculateLinePrices(cart)
    setOrderedProducts(cart)
  }

  useEffect( () => {
    getProducts()
    getProductTypes()
    getOrders()
  }, [])

  useEffect( () => {
    createCart()
  }, [orders])

  return <div className="products">
      {
        orderedProducts.map( p => {
        const productType = productTypes.find( productType => productType.id === p.productTypeId) || {} 
        return <Order key={p.id} product={p} productType={productType}/>
      })
      }
    </div>
  
}

const Order = ({ product, productType }) => {
  return <div className="order">
    <div className="order__name">{product.name}</div>
    <div className="order__type">Product Type: {productType.name}</div>
    <div className="order__price">${product.price}</div>
    <div className="order_quantity">Quantity ordered: {product.quantity}</div>
    <div className="order_linePrice">Line Price: {product.linePrice}</div>
  </div>
}