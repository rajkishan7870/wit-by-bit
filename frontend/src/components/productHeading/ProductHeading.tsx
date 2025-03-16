import React, {useState, useEffect} from 'react'
import style from "./ProductHeading.module.css"
import { useSetRecoilState } from 'recoil';
import { addProductState, catModalState } from '../../recoil/Atom';
import { useNavigate } from 'react-router-dom';

const ProductHeading = () => {

    const navigate = useNavigate()
    const [showaddproduct, setShowaddproduct] = useState(false)
    const setShowAddProductRecoil = useSetRecoilState(addProductState)

    const handleAddCategory = () => {
        navigate("/addcat")
    }

    const handleAddProduct = () => {
        setShowaddproduct(true)
    
    }

    useEffect(() => {
        setShowAddProductRecoil(showaddproduct)
    }, [showaddproduct]);


    return (
        <div className={style.productHeading}>
            <div className={style.productTypo}>
                Products
            </div>
            <div className={style.buttonContainer}>
                <span>
                    <button className={style.addCategory} onClick={handleAddCategory}>
                        Add Category
                    </button>
                </span>
                <span>
                    <button className={style.addProduct} onClick={handleAddProduct}>
                        Add Product
                    </button>
                </span>
            </div>
        </div>
    )
}

export default ProductHeading