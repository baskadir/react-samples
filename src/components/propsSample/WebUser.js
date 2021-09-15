import React from 'react'
import WebUserDetail from './WebUserDetail'
import WebUserPoints from './WebUserPoints'

function WebUser() {

    let webUser = {
        name: 'Kadir',
        surname: 'Bas',
        country: 'Türkiye',
        city: 'İstanbul',
        points: [1,5,2,6,8,14]
    };

    let sum = 0;
    const calcAverage = (array) => {
        array.map((item,key)=> {
            sum += item;
        })

        let average = sum/array.length;
        alert(average);
    }


    return (
        <>
            <WebUserDetail webUser={webUser} calc={calcAverage}></WebUserDetail>
            <WebUserPoints points={webUser.points.sort((a,b)=>{return a-b})}></WebUserPoints>
        </>
    )
}

export default WebUser