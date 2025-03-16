import React from 'react'
import style from "./AddProductProgress.module.css"

const AddProductProgress = () => {

  return (
    <div>
        <span className={style.description}>
            Description
        </span>
        <span className={style.firstArrow}>
            {"\u003E"}
        </span>
        <span className={style.variants}>
            Variants
        </span>
        <span className={style.secondArrow}>
            {"\u003E"}
        </span>
        <span className={style.combination}>
            Combination
        </span>
        <span className={style.thirdArrow}>
            {"\u003E"}
        </span>
        <span className={style.priceInfo}>
            PriceInfo
        </span>
    </div>
  )
}

export default AddProductProgress