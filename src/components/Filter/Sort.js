import React from 'react'
import './Filter.scss'

export const Sort = ({sort}) => (
    <div className='list-sort'>
        <div>Sort by:</div>
        <div className='keys'>
            <span onClick={sort} className='active'>Relevant</span>
            <span onClick={sort}>Name</span>
            <span onClick={sort}>Priority</span>
            <span onClick={sort}>Date</span>
        </div>
    </div>
)