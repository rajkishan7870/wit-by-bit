import React from 'react'
import style from "./Products.module.css"
import ProductHeading from '../productHeading/ProductHeading'
import Categories from '../categories/Categories'

interface Props {}

const Products : React.FC<Props> = () => {
  return (
    <div className={style.productScreenContainer}>
      <div>
      <ProductHeading/>
      </div>
      <div>
        <Categories/>
      </div>
    </div>
  )
}

export default Products


