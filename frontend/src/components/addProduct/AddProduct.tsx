import React from 'react'
import style from "./AddProduct.module.css"
import AddProductHeading from '../addProductHeading/AddProductHeading'
import AddProductProgress from '../addProductProgress/AddProductProgress'
import Description from '../description/Description'

const AddProduct = () => {
  return (
    <div className={style.addProductContainer}>
        <AddProductHeading/>
        <AddProductProgress/>
        <Description/>
    </div>
  )
}

export default AddProduct