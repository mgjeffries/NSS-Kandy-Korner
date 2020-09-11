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
  const [ cart, setCart] = useState([])


  useEffect( () => {
    getProducts()
    getProductTypes()
    getOrders()
  }, [])

  useEffect( () => {
    createOrderedProducts()
  }, [orders])

  const createOrderedProducts = () => {

    const isInCart = (order) => {
      return cart.some( p => p.id === order.productId)
    }

    const addToCartQuantity = (order) => {
      cart.forEach( (product) => {
        if(product.id===order.productId){
          product.quantity++
        }
      })
    }

    const calculateLinePrices = () => {
      cart.forEach(product => {
        product.linePrice = product.quantity * product.price
      })
    }
    

    const currentuser = parseInt(localStorage.getItem("kandy_customer"))
    const userOrders = orders.filter(order => {
      return order.customerId === currentuser})
    userOrders.forEach(order => {
      if (isInCart(order)) {
        addToCartQuantity(order)
      }
      else {
        const product = products.find(product => product.id === order.productId)
        product.quantity = 1
        cart.push(product)
      }
    });

    calculateLinePrices()
    setOrderedProducts(cart)
  }

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