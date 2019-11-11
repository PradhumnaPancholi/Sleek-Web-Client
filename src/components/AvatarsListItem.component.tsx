import { Grid } from '@material-ui/core'
import React from 'react'

const AvatarsListItem = ({avatar}: any) => {

    const handleAvatarSelection = (avatar: string) => {
        console.log(`You selected: ${avatar}`)
    }
    return(
        <Grid item lg={4} md sm xs>
            <div className='avatar-container' onClick = {(e) => handleAvatarSelection(avatar)}>
                <img key={avatar} src={`./avatars/${avatar}.png`} alt={avatar}/>
            </div>
        </Grid>
    )
}

export default AvatarsListItem
