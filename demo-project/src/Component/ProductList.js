import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([])

    useEffect(() => {
       getProduct();
    }, []);

    const getProduct = async () => {
        let result = await fetch("http://localhost:5000/product", {
            headers : {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json();
        if(result.status === 401 && !result.success){
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            alert(result.message);
            setTimeout(navigate("/login"), 500);
        } else {
            setProduct(result);
        }
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        if(result.status === 200){
            getProduct();
        }
    }

    const filterProduct = async (e) => {
        let key = e.target.value;
        
        if(key === "") getProduct();
        //try {
            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `bearer ${JSON.parse(localStorage.getItem("token"))}`
                }
            });
            result = await result.json();
            setProduct(result);
        // } catch (error) {
        //     console.log("error search", error.error)
        // }
        
    }

    return (
        <div className='product-list'>
            <h2>Product List</h2>
            <div>
                <input className='input-box' type='text' onChange={filterProduct} placeholder='Search Product' />
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Company</th>
                    <th>Product Model</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    product.length > 0 ?
                     product?.map((item, index) => {
                        return(
                                <tr>
                                    <td>{item.productName}</td>
                                    <td>{item.productPrice}</td>
                                    <td>{item.productCompany}</td>
                                    <td>{item.prodcutModel}</td>
                                    <td>&nbsp;<button onClick={() => navigate(`/update-product/${item._id}`)}>Edit Product</button>
                                    &nbsp;<button onClick={() => deleteProduct(item._id)}>Delete Product</button>&nbsp;</td>
                                </tr>
                        )
                    })
                    :
                    <h1>No Product Found...</h1>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList