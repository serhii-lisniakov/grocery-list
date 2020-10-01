import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEntry } from '../../redux/entries'
import Entry from '../Entries/Entries'
import './List.css'




class List extends Component {
    state = {
        entries: [this.props.entries],
        priority: '1',
        name: '',
    }

    componentDidUpdate() {
        this.render()
    }

    inputHandler = (field,e) => {
        this.setState({
            [field]: e.target.value,
        })
    }

    addEntry = () => {
        const newEntry = {
            id: this.props.entries.length + 1,
            priority: this.state.priority,
            name: this.state.name,
            status: 'ran out',
            date: new Date().toLocaleDateString()
        }

        this.props.createEntry(newEntry)
        this.setState({entries: [this.props.entries]})
    }

    filter = () => {
        const have = document.querySelector('#checkHave')
        const ranOut = document.querySelector('#checkRunOut')

        this.setState(() => {
            if (have.checked && ranOut.checked) {
                return {
                    entries: this.state.entries
                }
            }
            else if (!have.checked && !ranOut.checked) {
                return {
                    entries: []
                }
            }
            else if (have.checked) {
                return {
                    entries: this.state.entries.filter(entry => entry.status !== 'ran out')
                }
            }
            else if (ranOut.checked) {
                return {
                    entries: this.state.entries.filter(entry => entry.status !== 'have')
                }
            }
            
        })
    }

    render() {
        return (
            <div className='list'>
                <div className='list-actions'>
                    <div>
                        <label> 
                            <input id='checkHave' onChange={this.filter} defaultChecked type="checkbox"/> ran out
                        </label>
                        <label> 
                            <input id='checkRunOut' onChange={this.filter} defaultChecked type="checkbox"/> have
                        </label>
                    </div>
                </div>
                <div className='list-header'>
                    <div>priority</div>
                    <div>name</div>
                    <div>status</div>
                    <div>date</div>
                    <div>actions</div>
                </div>
                <div className='list-add'>
                    <select onChange={this.inputHandler.bind(this, 'priority')}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="text" onChange={this.inputHandler.bind(this, 'name')}/>
                    <button onClick={this.addEntry} className='list-btn'>+</button>
                </div>
                <div className='list-content'>
                    {this.state.entries.sort((a, b) => a.priority - b.priority).map(entry => (
                        <Entry 
                            key={entry.id}
                            id={entry.id}
                            priority={entry.priority}
                            name={entry.name}
                            status={entry.status}
                            date={entry.date}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        entries: state.entriesReducer.entries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEntry: e => dispatch(createEntry(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);