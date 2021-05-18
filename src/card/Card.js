
import './card.css'

import React from 'react'
const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export  {Card}
