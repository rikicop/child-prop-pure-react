import React from 'react';
import './Card.css';

export const Card = (props) => (
    <div className='container'>
        {props.children}
    </div>
)
