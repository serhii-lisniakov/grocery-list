import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { changeStatus, deleteEntry } from '../../redux/entries'
import './Entries.css'

const Entry = (props) => {
    return (
        <div className='entry'>
            <div className='entry-priority'>{props.priority}</div>
            <div className='entry-name'>{props.name}</div>
            <div className='entry-status'>
                <span 
                    onClick={props.changeStatus} 
                    data-id={props.id} 
                    style={props.status === 'have' ? {background: 'rgb(37, 163, 85)'} : {background: 'rgb(216, 56, 56)'}}>
                    {props.status}
                </span>
            </div>
            <div className='entry-date'><span>{props.date}</span></div>
            <div className='entry-actions'>
                <span onClick={props.delete} data-id={props.id}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='15' height='16' viewBox='0 0 14.93 16.99'> <g transform='translate(-1331.63 -446.18)'> <path fill='#fff' d='M1332.75,452.22l.79,9.59a1.484,1.484,0,0,0,1.49,1.36h8.14a1.481,1.481,0,0,0,1.48-1.36l.8-9.59h-12.7Zm3.86,7.47a.5.5,0,0,1-.5.5.508.508,0,0,1-.5-.5v-5.98a.5.5,0,0,1,.5-.49.493.493,0,0,1,.5.49Zm2.99,0a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5v-5.98a.493.493,0,0,1,.5-.49.5.5,0,0,1,.5.49Zm2.98,0a.5.5,0,1,1-.99,0v-5.98a.5.5,0,0,1,.99,0Z' /> <path fill='#fff' d='M1345.07,448.17h-3.48v-.49a1.5,1.5,0,0,0-1.5-1.5h-1.99a1.5,1.5,0,0,0-1.49,1.5v.49h-3.49a1.5,1.5,0,0,0-1.49,1.5v.99a.5.5,0,0,0,.5.5h13.94a.493.493,0,0,0,.49-.5v-.99A1.5,1.5,0,0,0,1345.07,448.17Zm-4.48,0h-2.99v-.49a.5.5,0,0,1,.5-.5h1.99a.5.5,0,0,1,.5.5Z' /> </g> </svg>
                </span>
            </div>
        </div>
    )
}

const Entries = (props) => {
    const [entriesList, setEntries] = useState(props.entries)
    const dispatch = useDispatch()

    const deleteHandler = (e) => {
        dispatch(deleteEntry(entriesList.find(entry => entry.id === +e.currentTarget.dataset.id)))
        setEntries(props.entries)
    }

    const changeStatusHandler = (e) => {
        dispatch(changeStatus(entriesList.find(entry => entry.id === +e.currentTarget.dataset.id)))
        setEntries(props.entries)
    }

    return (
        <div>
            {entriesList.sort((a, b) => a.priority - b.priority).map(entry => (
                <Entry 
                    key={entry.id}
                    id={entry.id}
                    priority={entry.priority}
                    name={entry.name}
                    status={entry.status}
                    date={entry.date}
                    delete={deleteHandler}
                    changeStatus={changeStatusHandler}
                 />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        entries: state.entriesReducer.entries
    }
}




export default connect(mapStateToProps, null)(Entries);