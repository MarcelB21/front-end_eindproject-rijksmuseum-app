import React from 'react';
import './Button.css'

function Button ({className, type="button", disabled, onClick, title}) {
    return (
        <div>
            <button
                type={type}
                disabled={disabled}
                onClick={onClick}
                className={className}>
                {title}
            </button>
        </div>
    )
}

export default Button;