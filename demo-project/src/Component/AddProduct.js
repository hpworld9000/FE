import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    const productDetail = (e) => {
        let key = e.target.name;
        setProduct({...product, [key]: e.target.value})
    } 

    const addProduct = async () => {
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })

        result = await result.json();
        if(result && (result.status === 401 || result.status === 403)){
            navigate("/login")
        }
        if(result && result.success){
            navigate("/");
        }
    }
    return (
        <div className='add-product register'>
            <h1>Add Product</h1>
            <input type='text' className='input-box' name={"productName"} value={product?.productName} onChange={productDetail}  placeholder='Enter Product Name' />
            <input type='text' className='input-box' name={"productPrice"} value={product?.productPrice} onChange={productDetail} placeholder='Enter Product Price' />
            <input type='text' className='input-box' name={"productCompany"} value={product?.productCompany} onChange={productDetail} placeholder='Enter Product Company' />
            <input type='text' className='input-box' name={"prodcutModel"} value={product?.prodcutModel} onChange={productDetail} placeholder='Enter Product Model' />
            <button className="sign-button" onClick={addProduct}>Add Product</button>&nbsp;
            <button className="sign-button" onClick={() => navigate("/")}>Cancel</button>
        </div>
    )
}

export default AddProduct