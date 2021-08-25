import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Cocktail({image, name, id, info, glass}) {
    return (
        <div className='phone'>
            <div className='img-container'>
                <img src={image} alt={name}/>
            </div>
            <div className='phone-footer'>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/phone/${id}`}><button className='add-btn'>details</button> </Link>
            </div>
            
        </div>
    )
}

export default Cocktail
