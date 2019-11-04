import { GridList } from '@material-ui/core'
import React from 'react'

import AvatarsListItem from './AvatarsListItem.component'

export default function AvatarsList() {
    
    const avatars: string[] = ['avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5', 'avatar6', 'avatar7', 'avatar8']
    
    return(
        <div>
            <GridList cellHeight={160} cols={3}>
                {avatars.map(avatar => (
                    <AvatarsListItem avatar= {`./avatars/${avatar}.png`}/>
                ))}
            </GridList>
        </div>
    )
}