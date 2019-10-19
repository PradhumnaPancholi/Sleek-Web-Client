import React from 'react'

const AvatarsListItem = ({avatar}: any) => {

    return(
        <div className='avatar-container'>
            <img src={avatar} alt={avatar}/>
        </div>
    )
}

export default AvatarsListItem
