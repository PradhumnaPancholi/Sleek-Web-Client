import React from 'react';
import { Modal } from '@material-ui/core';

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
                aria-labelledby="avatar-picker"
                aria-describedby="avatar-picker"
                open={open}
                onClose={handleClose}
            > 
                <div className="avatar-picker">
                    <h2 className="avatar-picker-header">Choose Your Avatar</h2>
                        <p className="avatar-picker-content">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                </div>
            </Modal>
        </div>
    )
}