import React from 'react';

export const Card = (props) => {
    const {makeupImg, title, price} = props;
    return (
        <div className='makeup-card'>
            <div className='makeup-image'>
                <img src={makeupImg} alt='make up' />
            </div>
            <div className='makeup-desc'>
                <p>{title}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}