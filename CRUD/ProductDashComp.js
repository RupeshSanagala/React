import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'bootstrap';

const ProductDashComp = () => {
    const{id} = useParams();
    const[product,setProduct] = useState([]);
    // useEffect hook is used in function component for getting output after render method for only time we pass another value as blank
    useEffect(()=>{
            axios.get("http://localhost:9999/products").then((result)=>{
                console.log(result.data);
                setProduct(result.data);
            }).catch((error)=>{
                
            })
    },[]);

    const fetchData = ()=>{
        axios.get("http://localhost:9999/products").then((result)=>{
            console.log(result.data);
            setProduct(result.data);
        }).catch((error)=>{
                
        });
    }

    
    //delete request
    const actionDelete = (id)=>{
        console.log(id);
        if(window.confirm(`Are you sure to delete product with: ${id}`)){
            axios.delete(`http://localhost:9999/products/${id}`).then(()=>{
                window.alert("Product deleted successfully");
                fetchData();
            }).catch((error)=>{})
        }
    }

   
  return (
    <div>
        <h2>This is ProductDashComp</h2>
        <Link to={`/MainDashBoard/ProductAddComp`} className='btn btn-info btn-sm'><AddIcon></AddIcon>Add</Link>{" "}
        {/* <Link to={`/MainDashBoard/ProductEditComp/${id}`} className='btn btn-info btn-sm'><EditIcon></EditIcon>Edit</Link> */}
        <table className='table table-hover table-bordered table-striped'>
            <thead>
                <tr>
                <th>S.No</th>
                <th>pid</th>
                <th>Pname</th>
                <th>Pbrand</th>
                <th>Pprice</th>
                <th>Pquantity</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   product.length>0 && product.map((val,index)=>{
                        return <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.id}</td>
                            <td>{val.pname}</td>
                            <td>{val.Brand}</td>
                            <td>{val.price}</td>
                            <td>{val.Quantity}</td>
                            <td>
                                <Link to={`/MainDashBoard/ProductEditComp/${val.id}`} className='btn btn-outline-success btn-sm'>
                                    <EditIcon></EditIcon>
                             </Link> |

                                <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>actionDelete(val.id)}><DeleteIcon></DeleteIcon></button>
                            </td>
                        </tr>

                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductDashComp