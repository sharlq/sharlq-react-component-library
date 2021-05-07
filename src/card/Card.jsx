import React from 'react'
import styles from './card.css'
import './card.css'
import CardImg from './CardImg'
import CardBody from './CardBody'
const Card = ({children}) => {
    return (
        <div className="card">
            <CardBody>
            {children}
            </CardBody>
        </div>
    )
}

export default Card
