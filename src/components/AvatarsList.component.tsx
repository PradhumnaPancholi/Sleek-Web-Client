import React from 'react';

export default function AvatarsList() {
    
    const array = ['avatar01', 'avatar02', 'avatar03', 'avatar04', 'avatar05', 'avatar06', 'avatar07', 'avatar08', 'avatar09']

    const avatarItems = array.map(item => {
        return item
    })

    return(
        <p>{avatarItems}</p>
    )
}