import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../Products/ProductProvider"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"
import { OrderContext } from "./OrderProvider"

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
    createOrderTotal()
  }, [orders])

  const createOrderTotal = () => {
    const isInCart = (order) => {
      return cart.some( p => p.id === order.productId)
    }
    const addToCartQuantity = (order) => {
      cart.forEach( (product, index ) => {
        if(product.id===order.productId){
          cart[index].quantity++
        }
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
    <div className="product__name">{product.name}</div>
    <div className="product__type">Product Type: {productType.name}</div>
    <div className="product__price">${product.price}</div>
    <div className="order_quantity">Quantity ordered: {product.quantity}</div>
  </div>
}