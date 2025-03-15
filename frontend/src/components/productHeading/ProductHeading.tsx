import React from 'react'
import style from "./ProductHeading.module.css"

const ProductHeading = () => {
  return (
    <div className={style.productHeading}>
        <div className={style.productTypo}>
          Products
        </div>
        <div className={style.buttonContainer}>
          <span><button className={style.addCategory}>Add Category</button></span>
          <span><button className={style.addProduct}>Add Product</button></span>
        </div>
      </div>
  )
}

export default ProductHeading