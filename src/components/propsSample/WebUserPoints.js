import React from 'react'

function WebUserPoints(props) {
    let {points} = props;

    return (
        <>
            <ul>
                {
                    points.map((item,key)=><li key={key}>{item*1.5}</li>)
                }
            </ul>        
        </>
    )
}

export default WebUserPoints
