import React from "react"
import "./Product.css"

export const Product = ({ product, productType }) => (
  <div className="product">
    <div className="product__name">{product.name}</div>
    <div className="product__type">Product Type: {productType.name}</div>
    <div className="product__price">${product.price}</div>
  </div>
)