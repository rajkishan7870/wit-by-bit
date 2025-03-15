import React from 'react'
import style from "./Sidebar.module.css"

interface Props {}

const Sidebar : React.FC<Props> = () => {


  const sideBarArray = ["Home", "Stores", "Products", "Catalogue", "Promotions", "Reports", "Docs", "Settings"]

  return (
    <div className={style.parentContainer}>
        {sideBarArray.map((ele)=>{
          return(
            <button className={style.sideButton}>

              <span><div className={style.rectangle}></div></span>

              <span className={style.insideButton}>{ele}</span>
              
              </button>
          )
        })}
    </div>
  )
}

export default Sidebar

