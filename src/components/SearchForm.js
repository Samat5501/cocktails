import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import './style.css'

function SearchForm() {
    const { setSearchItem } = useGlobalContext();
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    const searchCocktail = () => {
        setSearchItem(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Search your favorite ...</label>
                    <input type='text' id='name'
                        onChange={searchCocktail}
                        ref={searchValue} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
