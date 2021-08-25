import React from 'react'
import PhoneList from '../PhoneList'
import SearchForm from '../SearchForm'

function Home() {
    return (
        <div>
            {/* Home Page */}
            <SearchForm />
            <PhoneList/>
        </div>
    )
}

export default Home
