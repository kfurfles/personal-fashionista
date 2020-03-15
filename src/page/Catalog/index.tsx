import React, { useEffect, useState } from 'react'
// import { getProducts } from './../../services/api'
export const Catalog = () =>{
    const [ products, setProducts] = useState([])

    // useEffect(() =>{
    //     const fetchData = async () =>{
    //         const products = await getProducts()
    //         console.log(products)
    //         setProducts(products)
    //     }

    //     fetchData()
    // },[])

    return (
        <div>
            {/* {products.map((product: any, i) => <div key={i}>{product.name}</div>)} */}
        </div>
    )
}