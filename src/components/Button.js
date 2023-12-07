import React from 'react'

export default function Button({ text, className, onClick, value }) {
    return (
        <button className={`${className} button`} onClick={onClick} value={value}>
            {text}
        </button>
    )
}
