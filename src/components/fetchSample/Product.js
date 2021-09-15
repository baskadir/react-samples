import React, { useEffect, useState } from 'react'
import {apiUrl} from '../../env/config'

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        fetch(apiUrl + '/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
    }

    const deleteProduct = (id) => {
        let answer = window.confirm("Really?")
        if (answer) {
            let requestOptions = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            };

            fetch(apiUrl + '/api/products/' + id, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log('Product deleted')
                    getProducts();
                })
        }
        else {
            console.log('Product not deleted');
        }
    }
    return (
        <>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Stock</td>
                    <td>Delete</td>
                </tr>
                {
                    products.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Product
