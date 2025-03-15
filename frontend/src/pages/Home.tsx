import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Products from '../components/products/Products'
import style from "./Home.module.css"

export default function Home() {
    return (
        <div className={style.parentContainer}>
            <div className={style.sidebarContainer}>
                <Sidebar />
            </div>
            <div className={style.productsContainer}>
                <Products />
            </div>
        </div>
    )
}
