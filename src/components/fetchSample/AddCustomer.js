import React, { useState } from 'react'

function AddCustomer(props) {

    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');

    const add = () => {
        let newCustomer = {
            companyName:companyName,
            contactName:contactName,
            contactTitle:contactTitle
        };

        props.add(newCustomer);
    }
    return (
        <>
            <div>
                <label>Company Name: </label>
                <input type='text' value={companyName} onChange={(e)=>setCompanyName(e.target.value)}></input>
            </div>
            <div>
                <label>Contact Name: </label>
                <input type='text' value={contactName} onChange={(e)=>setContactName(e.target.value)}></input>
            </div>
            <div>
                <label>Contact Title: </label>
                <input type='text' value={contactTitle} onChange={(e)=>setContactTitle(e.target.value)}></input>
            </div>
            <div>
                <button onClick={()=>add()}>Add Customer</button>
            </div>
        </>
    )
}

export default AddCustomer
