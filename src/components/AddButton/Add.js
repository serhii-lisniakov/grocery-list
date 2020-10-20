import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemAction } from '../../redux/List/actions'
import './Add.scss'

const inputs = [
    {priority: 1, color: 'Red'},
    {priority: 2, color: 'Orange'},
    {priority: 3, color: 'Yellow'},
    {priority: 4, color: 'Lightgreen'},
    {priority: 5, color: 'Green'},
]

export const AddItem = () => {
    const items = useSelector(state => state.items)
    const [name, setName] = useState('')
    const [priority, setPriority] = useState(1)
    const [valid, setValid] = useState(true)
    const dispatch = useDispatch()

    const popup = () => {
        document.querySelector('.add-popup').classList.toggle('active')
        document.querySelector('.add-popup-body').classList.toggle('active')
    }

    const add = (e) => {
        e.preventDefault()
        
        const newItem = {
            id: items.length + 1,
            priority: priority.toString(),
            name: name.toLowerCase(),
            status: false,
            date: new Date().toLocaleDateString('lv-LV')
        }

        if (name.trim().length > 0) {
            dispatch(addItemAction(newItem))
            document.querySelector('.add-popup').classList.remove('active')
            document.querySelector('.add-popup-body').classList.remove('active')
            setName('')
        } else {
            setValid(false)
            setTimeout(() => setValid(true), 2000)
        }
    }
    return (
        <>
            <div className='add-item'>
                <button onClick={popup}>Add new item</button>
            </div>

            <div className='add-popup' onClick={popup}></div>
            <div className='add-popup-body'>
                <div className={valid ? '' : 'invalid'}>
                    <input 
                        type="text" 
                        placeholder='Enter the name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>Priority: </div>
                <form onSubmit={e => add(e)}>
                    {
                        inputs.map(i => (
                            <>
                                <input 
                                    type='radio'
                                    id={'radio' + i.priority} 
                                    name='marker'
                                    onChange={() => setPriority(i.priority)}
                                    defaultChecked={i.priority === 1 ? true : false}
                                />
                                <label 
                                    htmlFor={'radio' + i.priority} 
                                >{i.priority}: {i.color}</label>
                            </>
                        ))
                    }
                    <div>
                        <button type='submit'>ADD</button>
                    </div>
                </form>
            </div>
        </>
    )
}