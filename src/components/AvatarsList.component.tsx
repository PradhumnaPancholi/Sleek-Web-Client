import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';

export default function AvatarsList() {
    
    const array = ['avatar01', 'avatar02', 'avatar03', 'avatar04', 'avatar05', 'avatar06', 'avatar07', 'avatar08', 'avatar09']
    return(
        <div>
            <GridList cellHeight={160} cols={3}>
                {array.map(item => (
                    <GridListTile>
                        <p>{item}</p>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}