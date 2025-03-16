import React from 'react'
import style from "./AddProductHeading.module.css"

const AddProductHeading = () => {
    const handleCancel = ()=>{

    }
    const handleNext = ()=>{
        
    }
  return (
    <div className={style.productHeading}>
            <div className={style.productTypo}>
                Add Products
            </div>
            <div className={style.buttonContainer}>
                <span>
                    <button className={style.addCategory} onClick={handleCancel}>
                        Cancel
                    </button>
                </span>
                <span>
                    <button className={style.addProduct} onClick={handleNext}>
                        Next
                    </button>
                </span>
            </div>
        </div>
  )
}

export default AddProductHeading