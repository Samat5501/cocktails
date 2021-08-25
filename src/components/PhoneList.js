import React from 'react'
import Phone from './Phone'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import './style.css'


function PhoneList() {
    const { phoneList, loading } = useGlobalContext();
    console.log(phoneList);
    if (loading) {
        return (
            <h1><Loading/></h1>
        )
    }
    if (phoneList.length < 1) {
        return <h1>Sorry this cocktail Not here</h1>
    }
    return (
        <div className='phone-section'>
            <h1>Cocktails</h1>
            <div className='phone-center'>
                {phoneList.map((item) => {
                    return <Phone key={item.id} {...item}/>
                })}
            </div>
        </div>
    )
}

export default PhoneList
