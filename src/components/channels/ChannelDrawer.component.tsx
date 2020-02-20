import { Drawer, List, ListItem } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const ChannelDrawer: FunctionComponent = () => {

    //dummy channels list//
    let channels = ['channel 1', 'orgmode', 'marketting', 'development']
    return(
        <div className='channel-drawer'>
            <Drawer
                variant='permanent'
                anchor='left'
            >   
                <div />
                <List>
                    {channels.map((channel: string) => (
                        <ListItem key={channel}>
                            <p>#{channel}</p>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </div>
    )
}

export default ChannelDrawer