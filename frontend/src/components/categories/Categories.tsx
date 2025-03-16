import React from 'react'
import style from "./Categories.module.css"
import { FaIndianRupeeSign } from "react-icons/fa6";

const Categories = () => {
    return (
        <div className={style.allCatContainer}>
            <div className={style.singleCatContainer}>
                <div className={style.catName}>
                    Shoes
                </div>
                <div className={style.productListContainer}>
                    <div className={style.singleProductContainer}>
                        <img src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png' alt='im' />
                        <div className={style.productDetails}>
                            <div >
                                <p className={style.productName}>Nike Air Jordan</p>
                                <p>12000</p>
                            </div>
                            <div className={style.brandName}>Nike</div>
                        </div>
                    </div>
                    <div className={style.singleProductContainer}>
                        <img src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png' alt='im' />
                        <div className={style.productDetails}>
                            <div>
                                <p className={style.productName}>Nike Duck Low</p>
                                <p>8000</p>
                            </div>
                            <div className={style.brandName}>Nike</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.singleCatContainer}>
                <div className={style.catName}>
                    T-Shirt
                </div>
                <div className={style.productListContainer}>
                    <div className={style.singleProductContainer}>
                        <img src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png' alt='im' />
                        <div className={style.productDetails}>
                            <div>
                                <p className={style.productName}>Nike Air Jordan</p>
                                <p>12000</p>
                            </div>
                            <div className={style.brandName}>Nike</div>
                        </div>
                    </div>
                    <div className={style.singleProductContainer}>
                        <img src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png' alt='im' />
                        <div className={style.productDetails}>
                            <div>
                                <p className={style.productName}>Nike Duck Low</p>
                                <p>8000</p>
                            </div>
                            <div className={style.brandName}>Nike</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories