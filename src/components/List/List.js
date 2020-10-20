import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatusAction, deleteAction } from '../../redux/List/actions'
import { Filter } from '../Filter/Filter'
import './List.scss'
import { Sort } from '../Filter/Sort'
import { Help } from '../Help/Help'
import { AddItem } from '../AddButton/Add'

const List = () => {
    const items = useSelector(state => state.items)
    const [itemsList, setItemsList] = useState(items)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('grocery-list', JSON.stringify(items))
        setItemsList(items)
    }, [items])

    const filter = () => {
        const have = document.getElementById('have')
        const ranOut = document.getElementById('ranOut')

        if (have.checked && ranOut.checked) setItemsList(items)
        else if (have.checked) setItemsList(items.filter(item => item.status === true))
        else if (ranOut.checked) setItemsList(items.filter(item => item.status === false))
        else return setItemsList([])
    }

    const sort = (e) => {
        document.querySelectorAll('.keys > span').forEach(s => s.classList.remove('active'))
        e.currentTarget.classList.add('active')
        
        const type = e.currentTarget.innerHTML.toLowerCase()
        
        if (type === 'name') setItemsList(itemsList.sort((a, b) => a.name > b.name ? 1 : -1).slice(0))
        else if (type === 'priority') setItemsList(itemsList.sort((a, b) => +a.priority - +b.priority).slice(0))
        else if (type === 'date') setItemsList(itemsList.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).slice(0))
        else setItemsList(itemsList.sort((a, b) => b.id - a.id).slice(0))
    }

    // if (!itemsList.length) return <div className='list-wrapper-empty'>No items</div>
    return (
        <div className='desk'>

            <div className='list-actions'>
                <div className='list-actions-inner'>
                    <Filter filter={() => filter()}/>
                    <Sort sort={(e) => sort(e)}/>
                </div>
                <AddItem />

                <Help />
            </div>


            <div className="list">
                {
                    !items.length ? <div className='list-empty'>No items</div> :
                
                    itemsList.map(item => (
                        <div className='item' key={item.id}>
                            <div className='item-name'>
                                <span className='name'>
                                    {item.name}
                                    <span className={`marker marker${item.priority}`}></span>
                                </span>
                            </div>
                            <div 
                                className='item-status' 
                                style={{background: item.status ? 'rgba(0,128,0,0.5)' : 'rgba(255,0,0,0.8)'}}
                                onClick={() => dispatch(changeStatusAction(item.id))}
                            >{item.status ? 'have' : 'ran out' }</div>
                            <div className='item-date'>
                                <span>Last change: </span>
                                {new Date(item.date).toLocaleDateString()}
                            </div>
                            <div 
                                className='item-delete'
                                onClick={() => dispatch(deleteAction(item.id))}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100"><g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#c2c2c2" stroke="none"><path  d="M687 840 l-156 -160 -86 131 c-48 71 -93 133 -101 136 -19 7 -44 -15-44 -38 0 -22 -4 -23 -31 -6 -18 11 -23 8 -45 -18 -13 -16 -24 -36 -24 -43 0-23 60 -169 109 -265 l49 -95 -76 -88 c-152 -176 -156 -181 -142 -214 8 -20 9-34 1 -48 -8 -15 -5 -27 15 -55 21 -32 29 -36 51 -31 19 5 24 4 19 -5 -10 -15 11 -41 33 -41 10 0 59 56 121 139 l104 140 33 -47 c64 -92 114 -153 129 -159 8 -3 26 5 40 18 22 20 28 22 45 10 18 -11 24 -9 45 10 13 12 21 25 19 30 -3 4 8 17 24 28 16 12 34 34 39 50 9 24 7 32 -8 46 -33 29 -180 222 -180 235 0 14 65 91 196 233 113 122 122 138 101 171 -9 13 -24 23 -34 22 -10 0 -19 7 -21 19 -6 28 -32 55 -52 55 -10 0 -88 -72 -173 -160z" /></g></svg>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
} 

export default List