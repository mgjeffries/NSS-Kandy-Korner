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

  const isInCart = (order) => {
    return cart.some( p => p.id === order.productId)
  }

  const addToCartQuantity = (order) => {
    //TODO: why are these shallow copies of the cart breaking the app? I suspect that I have an incomplete understanding of the useState hook.
    const cartCopy = cart.slice()
    cart.forEach( (product, index) => {
      if(product.id===order.productId){
        cartCopy[index].quantity++
      }
    })
    setCart(cartCopy)
  }

  const calculateLinePrices = () => {
    const cartCopy = cart.slice()
    cart.forEach((product, index) => {
      cartCopy[index].linePrice = product.quantity * product.price
    })
    setCart(cartCopy)
  }


  const createCart = () => {
    setCart([])

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
        const cartCopy = cart.slice()
        cartCopy.push(product)
        setCart(cartCopy)
      }
    });

    calculateLinePrices()
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