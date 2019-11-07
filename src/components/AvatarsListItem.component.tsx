import { Grid } from '@material-ui/core'
import React from 'react'

const AvatarsListItem = ({avatar}: any) => {

    return(
        <Grid item lg={4} md sm xs>
            <div className='avatar-container'>
                <img src={avatar} alt={avatar}/>
            </div>
        </Grid>
    )
}

export default AvatarsListItem
