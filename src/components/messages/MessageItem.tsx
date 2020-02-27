import React, { FunctionComponent } from 'react'

export const MessageItem: FunctionComponent = () => {
    return(
        <div className='message-item'>
            <img className='user-profile-img' src={`./avatars/avatar1.png`}></img>
            <div>
                <p>User Name</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> 
            </div>
        </div>
    )
}