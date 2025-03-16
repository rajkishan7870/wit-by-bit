import React from 'react'
import style from "./AddCategory.module.css"

const AddCategory = () => {
    return (
        <div className={style.addCatContainer}>
            <p className={style.addCatHeading}>Add Category</p>
            <div>
                <label >Category name</label>
                <input required />
            </div>
            <div className={style.cancelAndSaveButton}>
                <span>
                    <button className={style.cancelButton}>
                        Cancel
                    </button>
                </span>
                <span>
                    <button className={style.saveButton}>
                        Save
                    </button>
                </span>
            </div>
        </div>
    )
}

export default AddCategory