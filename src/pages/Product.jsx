import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from "react-query";

async function getProducts() {
    const res = await axios.get("https://northwind.vercel.app/api/products");
    return res.data;
}

function Product() {
    const BASE_URL = "https://northwind.vercel.app/api/products";

    const { data, status } = useQuery("products", getProducts);

    const handleDelete = (id) => {
        axios.delete(`${BASE_URL}/${id}`).then(res => {
            axios.get(BASE_URL)
        })
    }

    return (
        <div className='font-bold max-w-[1256px] h-16 mx-auto flex justify-center'>
            <table className='bg-orange-100 w-full'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th></th>
                    </tr>
                </thead>
                {status === "error" && <p>Error fetching data</p>}
                {status === "loading" && <p>Fetching data...</p>}
                {status === "success" && (
                    <tbody className=''>
                        {data.map(item =>
                            <tr key={item.id}>
                                <td className='p-4'><Link to={`/product/:${item.id}`}>{item.id}</Link></td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.unitsInStock}</td>
                                <td><button className='text-red-600' onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default Product