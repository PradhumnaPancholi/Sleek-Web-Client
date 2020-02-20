import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const ChannelDrawer: FunctionComponent = () => {

    //dummy channels list//
    let channels = ['channel 1', 'orgmode', 'marketting', 'development']
    return(
        <div>
            <Drawer
                variant='permanent'
                anchor='left'
            >   
                <div />
                <List>
                    {channels.map((channel: string) => (
                        <ListItem key={channel}>
                            <ListItemText primary={channel}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </div>
    )
}

export default ChannelDrawer