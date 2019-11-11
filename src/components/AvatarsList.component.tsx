import { Grid } from '@material-ui/core'
import React from 'react'

import AvatarsListItem from './AvatarsListItem.component'

export default function AvatarsList() {
    
    const avatars: string[] = ['avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5', 'avatar6', 'avatar7', 'avatar8']
    
    return(
        <div>
            <Grid container>
                {avatars.map(avatar => (
                    <AvatarsListItem avatar = {avatar}/>
                ))}
            </Grid>
        </div>
    )
}