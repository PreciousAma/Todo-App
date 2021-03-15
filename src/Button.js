import React from 'react'

const Button = ({buttonAction, buttonText, ...rest}) => {
    return (
        <button onClick={buttonAction} {...rest}>{buttonText}</button>
    )
}

export default Button;