import { Modal } from '@material-ui/core'
import React from 'react'

import AvatarsList from './AvatarsList.component'

export default function AvatarModal() {

    const [open, setOpen] = React.useState(false);
        
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return(
        <div>
            <button type="button" onClick={handleOpen}>
                ChooseAvatar
            </button>

            <Modal
                aria-labelledby="avatar-picker-modal"
                aria-describedby="avatar-picker-modal"
                open={open}
                onClose={handleClose}
            > 
                <div className="avatar-picker">
                    <h2 className="avatar-picker-header">Choose Your Avatar</h2>
                    <AvatarsList />
                </div>
            </Modal>
        </div>
    )
}