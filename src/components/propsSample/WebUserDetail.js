import React from 'react'

function WebUserDetail(props) {

    let {webUser,calc} = props;
    
    return (
        <>
            <p>{webUser.name.toUpperCase()}</p>
            <p>{webUser.surname.toUpperCase()}</p>
            <p>{webUser.country.toUpperCase()}</p>
            <p>{webUser.city.toUpperCase()}</p>
            <button onClick={()=>calc(webUser.points)}>Ortalama</button>
        </>
    )
}

export default WebUserDetail
