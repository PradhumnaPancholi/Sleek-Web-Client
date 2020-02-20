import { TextField } from '@material-ui/core'
import { FunctionComponent, useState } from 'react'
import React from 'react'

interface InputProps{
    type: string
}

interface InputState{
    value: string
}

const Input:FunctionComponent<InputProps> = ({type}) => {

    const [value, setValue] = useState<InputState>()
    //for controlled input//
    const handleInputChanges = (e: any) => {
        let {name, value} = e.target
        setValue(name => value)
    }

    return(
        <div>
            <TextField
                id='outlined-email-input'
                label={type}
                type={type}
                name={type}
                value={value}
                onChange={(e) => handleInputChanges(e)}
                autoComplete='email'
                margin='normal'
                variant='outlined'
                InputProps={{
                    className:'login-input-props'
                }}
            />
        </div>
    )
}

export default Input