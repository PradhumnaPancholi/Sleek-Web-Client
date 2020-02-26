import React, { FunctionComponent } from 'react'

import { MessageItem } from './MessageItem'

export const MessageBoard: FunctionComponent = () => {
    return(
        <div className='message-board'>
            <MessageItem/>
            <MessageItem/>
            <MessageItem />
            <MessageItem />
        </div>
    )
}
