import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import React from 'react'

const UpdateProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        getProductDetail();
    }, []);

    const getProductDetail = async () => {
        let result = await fetch(`http://localhost:5000/get-product/${params.id}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        result = await result.json();
        setProduct(result)
    }

    const productDetail = (e) => {
        let key = e.target.name;
        setProduct({...product, [key]: e.target.value})
    } 

    const updateSelectedProduct = async () => {
        const {productName, productPrice, productCompany, prodcutModel} = product;
        let result = await fetch(`http://localhost:5000/update-product/${params.id}`, {
            method: "put",
            body: JSON.stringify({productName, productPrice, productCompany, prodcutModel}),
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })

        if(result && result.status === 200){
            navigate("/");
        }
    }
    return (
        <div className='add-product register'>
            <h1>Update Product</h1>
            <input type='text' className='input-box' name={"productName"} value={product?.productName} onChange={productDetail}  placeholder='Enter Product Name' />
            <input type='text' className='input-box' name={"productPrice"} value={product?.productPrice} onChange={productDetail} placeholder='Enter Product Price' />
            <input type='text' className='input-box' name={"productCompany"} value={product?.productCompany} onChange={productDetail} placeholder='Enter Product Company' />
            <input type='text' className='input-box' name={"prodcutModel"} value={product?.prodcutModel} onChange={productDetail} placeholder='Enter Product Model' />
            <button className="sign-button" onClick={updateSelectedProduct}>Update Product</button>&nbsp;
            <button className="sign-button" onClick={() => navigate("/")}>Cancel</button>
        </div>
    )
}

export default UpdateProduct