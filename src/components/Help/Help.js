import React from 'react'
import './Help.scss'

const markerTip = `Priority highlighter set the nesessity of good: <br/>
<span>1</span> - you need it urgently<br/>
<span>2</span> - less important<br/>
<span>3</span> - nice to get<br/>
<span>4</span> - you don't know you need it<br/>
<span>5</span> - not important<br/>
`
const statusTip = `Status of your staff: <br/>
<span>Have</span> - you have it yet<br/>
<span>Run out</span> - it is time to spend your money<br/>
`

export const Help = () => {
    let tip

    const showtip = (e) => {
        tip = document.createElement('div')
        tip.className = 'help-tip item-name name'
        tip.innerHTML = e.target.innerHTML === 'Status?' ? statusTip : markerTip
        document.body.append(tip)
        tip.style.left = e.clientX + 10 + 'px';
        tip.style.top = e.clientY + 10 + 'px';
    }
    const hideTip = () => tip.remove();

    return (
        <div className='list-help item-name'>
            <span className='name'>
                Milk
                <span className='marker marker5'></span>
                <span 
                    className='tip'
                    onMouseEnter={(e) => showtip(e)}
                    onMouseLeave={() => hideTip()}
                >Highlighter?</span>
            </span>
            <div className='item-status'>
                ran out
                <span 
                    className='tip'
                    onMouseEnter={(e) => showtip(e)}
                    onMouseLeave={() => hideTip()}
                >Status?</span>
            </div>
        </div>
    )
}