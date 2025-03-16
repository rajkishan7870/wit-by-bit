import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Products from '../components/products/Products'
import style from "./Home.module.css"
import AddProduct from '../components/addProduct/AddProduct'
import { useRecoilValue } from 'recoil';
import { addProductState } from '../recoil/Atom'

export default function Home() {

    const showAddProduct = useRecoilValue(addProductState);

    return (
        <div className={style.parentContainer}>
            <div className={style.sidebarContainer}>
                <Sidebar />
            </div>
            <div className={style.productsContainer}>
                {showAddProduct ? <AddProduct/> : <Products />}               
            </div>
        </div>
    )
}
