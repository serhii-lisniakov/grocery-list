import React from 'react'
import './Filter.scss'

export const Filter = ({filter}) => (
    <div className='list-filter'>
        Show only: 
        <input 
            type='checkbox' 
            defaultChecked
            id='have'
            onChange={filter}
        />
        <label htmlFor='have'>Have</label>
        <input 
            type='checkbox' 
            defaultChecked
            id='ranOut'
            onChange={filter}
        />
        <label htmlFor='ranOut'>Ran out</label>
    </div>
)