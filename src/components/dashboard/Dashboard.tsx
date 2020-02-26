import React, { FunctionComponent } from 'react'

import ChannelDrawer from '../channels/ChannelDrawer.component'
import { MessageBoard } from '../messages/MessageBoard'

const Dashboard: FunctionComponent = () => {
    return(
        <div>
        <ChannelDrawer />
        <MessageBoard/>
        </div>
    )
}

export default Dashboard