import React from 'react'
import {RenderIf} from '../../renderIf'
import Entries from '../Entries/Entries'
import List from '../List/List'

import './Page.css'


const Page = (props) => {
    return (
        <div className={props.class}>
            <div className="container">
                <RenderIf condition={props.class === 'page page-list'}>
                    <List/>
                </RenderIf>
                <RenderIf condition={props.class === 'page page-entries'}>
                    <Entries/>
                </RenderIf>
                <RenderIf condition={props.class === 'page page-error'}>
                    <div>Error 404. Page not found.</div>
                </RenderIf>
            </div>
        </div>
    )
}

export default Page