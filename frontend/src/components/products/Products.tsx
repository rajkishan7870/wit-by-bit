import React from 'react'
import style from "./Products.module.css"

interface Props {}

const Products : React.FC<Props> = () => {
  return (
    <div>
      <div className={style.productHeading}>
        <div className={style.productTypo}>
          Products
        </div>
        <div>
          <span><button className={style.addCategory}>Add Category</button></span>
          <span><button className={style.addProduct}>Add Product</button></span>
        </div>
      </div>
    </div>
  )
}

export default Products


