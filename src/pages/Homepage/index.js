import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrandSearch } from '../../redux/actions/HomepageActions';
import { Card } from '../../components/Card'

const Homepage = () => {
    const dispatch = useDispatch()
    const {brandSearch, isLoading} = useSelector(state => state.homepage)
    const [value, setValue] = useState('')

    useEffect((value) => {
        dispatch(getBrandSearch(value))
    }, [dispatch])
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getBrandSearch(value))
    }

    // console.log('value', value)
    console.log('search', brandSearch)
    return (
        <>
        {isLoading ? (
            <div id='loader'></div>
        ) : (
            <>
            <div className={brandSearch.length === 0 ? 'web-title-start' : 'web-title'}>
                <h2>MAKEUPSTUFF</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Search Makeup Brand...' onChange={handleChange}/>
                </form>
            </div>
            <div className='makeup-card-box'>
            {brandSearch.map((item, index) => (
                <Card 
                key={index}
                makeupImg={item.image_link}
                title={item.name}
                price={item.price}
                />
            ))}
            </div>
            </>
        )}
        </>
    )
}

export default Homepage;