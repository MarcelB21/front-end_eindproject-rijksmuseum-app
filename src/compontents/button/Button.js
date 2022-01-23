import React from 'react';
import './Button.css'

function Button ({type="button", disabled, onClick, title}) {
    return (
        <div>
            <button
                type={type}
                disabled={disabled}
                onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default Button;