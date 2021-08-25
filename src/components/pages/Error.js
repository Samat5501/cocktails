import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <div className='error'>
            Sorry Error
            <h3>Error</h3>
            <Link to='/'>
                <button> Back Home</button>
            </Link>
        </div>
    )
}

export default Error
