import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const ProductAddComp = () => {
    const nav = useNavigate();
    const[product,setProduct] = useState({
        id:"",
        pname:"",
        price:"",
        Brand:"",
        Quantity:""
    });

    const inputChangeHandler = (event) =>{
         const{name,value} = event.target;
         setProduct({...product,[name]:value});
    }

    const addProduct=(event) =>{
        event.preventDefault();
        console.log(product);
        axios.post(`http://localhost:9999/products`,product).then(()=>{
            window.alert("product added successfully");
            nav('/MainDashBoard/ProductDashComp');
        }).catch((error)=>{})
    }
  return (
    <div>
        <h2>This is ProductAddComp</h2>
        <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <form onSubmit={addProduct}>
                <label className='form-label'>Enter product id:</label>
                <input  type='text' name='id' onChange={inputChangeHandler} value={product.id} className='form-control' />

                <label className='form-label'>Enter product Name:</label>
                <input  type='text' name='pname' onChange={inputChangeHandler} value={product.pname} className='form-control' />

                <label className='form-label'>Enter product price:</label>
                <input  type='text' name='price' onChange={inputChangeHandler} value={product.price} className='form-control' />

                <label className='form-label'>Enter product brand:</label>
                <input  type='text' name='Brand' onChange={inputChangeHandler} value={product.Brand} className='form-control' />

                <label className='form-label'>Enter product Quantity:</label>
                <input  type='text' name='Quantity' onChange={inputChangeHandler} value={product.Quantity} className='form-control' />
                <button type='submit' className='btn btn-primary mt-2'>Add Data</button>
                </form>
            </div>
            <div className='col-sm-3'></div>
        </div>
    </div>
  )
}

export default ProductAddComp