import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => {
            setProduct(res.data.find(item => item.id == id.substring(1)))
        })
    }, [])

    return (
        <div>
            {
                product ? (
                    <div className='font-bold max-w-[1256px] h-16 mx-auto justify-center'>
                        <h1 className='text-center bg-orange-100 mt-2'>Axios Product Detail</h1>
                        <div className='bg-orange-100 w-fullmx-auto p-4'>
                            <h2><span>ID: </span>{product.id}</h2>
                            <h2><span>Name: </span>{product.name}</h2>
                            <h2><span>Unit Price: </span>{product.unitPrice}</h2>
                            <h2><span>Unit Instock: </span>{product.unitsInStock}</h2>
                            <Link className='text-green-800' to="/product"><button>Go Back</button></Link>
                        </div>
                    </div>
                ) : null
            }
        </div>

    )
}

export default ProductDetails