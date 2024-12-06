import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const ProductEditComp = () => {
    const {id} = useParams();
    const nav = useNavigate();

    const [product,setProduct] = useState({
        id:"",
        name:"",
        price:"",
        Brand:"",
        Quantity:""
    });

    useEffect (()=>{
       axios.get(`http://localhost:9999/products/${id}`).then((res)=>{
        console.log(res.data);
        setProduct(res.data)
       }).catch()
        
    },[]);

    const inputChangeHandler = (event) =>{
        const{name,value} = event.target;
        setProduct({...product,[name]:value});
   }

   const addProduct=(event) =>{
       event.preventDefault();
    //    console.log(product);
       axios.put(`http://localhost:9999/products/${id}`,product).then(()=>{
           window.alert("product Edited successfully");
           nav('/MainDashBoard/ProductDashComp');
       }).catch((error)=>{})
   }

  return (
    <div>
        <h2>This is ProductEditComp</h2>
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
                <button type='submit' className='btn btn-primary mt-2'>Edit Data</button>
                </form>
            </div>
            <div className='col-sm-3'></div>
        </div>
        
    </div>
  )
}

export default ProductEditComp