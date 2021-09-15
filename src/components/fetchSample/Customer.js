import React, { useEffect, useState } from 'react'
import {apiUrl} from '../../env/config'
import AddCustomer from './AddCustomer';

function Customer() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            getCustomers();
            setLoading(false);
        },2000)
    }, [])

    const getCustomers = () => {
        fetch(apiUrl + '/api/customers')
            .then((res) => res.json())
            .then((data) => {
                setCustomers(data);
            })
    }

    const add = (data) => {
        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        };

        fetch(apiUrl + '/api/customers', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                alert('Customer added')
                getCustomers();
            })
    }

    const deleteCustomer = (id) => {
        let answer = window.confirm("Really?")
        if (answer) {
            let requestOptions = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            };

            fetch(apiUrl + '/api/customers/' + id, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log('Customer deleted')
                    getCustomers();
                })
        }
        else {
            console.log('Customer not deleted');
        }

    }
    return (
        <>
            <AddCustomer add={add}></AddCustomer>
            <hr></hr>
            {
                loading == true ? <span>loading...</span> : <></>
            }
            <table>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Contact Name</td>
                    <td>Contact Title</td>
                    <td>Delete</td>
                </tr>
                {
                    customers.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => deleteCustomer(item.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Customer
