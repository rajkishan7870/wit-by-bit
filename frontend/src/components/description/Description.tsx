import React, {useEffect, useState} from 'react'
import style from "./Description.module.css"
import { useForm, SubmitHandler } from "react-hook-form"

const Description = () => {

  type Inputs = {
    productname: string
    category: string
    brand: string
  }

  const [pic, setPic] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }



  const postDetails = (pics: File) => {
    
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Chat-App");
      data.append("cloud_name", "dztdf6qvw");
      fetch("https://api.cloudinary.com/v1_1/dztdf6qvw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
    }
  };


  useEffect(()=>{
    
  }, [pic])

  return (
    <div className={style.descriptionParent}>
      <div className={style.descriptionTypo}>Description</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label >Product Name* </label>
          <input {...register("productname", { required: true })} />
        </div>
        <div>
          <label>Category*</label>
          <select {...register("category", { required: true })}>
            <option value="">Select Category</option>
            <option value="Shoes">Shoes</option>
            <option value="T-shirt">T-shirt</option>
            <option value="books">Books</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
        <div>
          <label>Brand*</label>
          <input {...register("brand", { required: true })} />
        </div>
        <label className={style.imageUploadButton}>
          Upload Image
        <input 
          type="file" 
          accept="image/*" 
          className="hidden"
          onChange= {(e) => {
            if (e.target.files && e.target.files.length > 0) {
              postDetails(e.target.files[0]);
            }
          }}
        />
        </label>
    </form>
    </div>
  )
}

export default Description