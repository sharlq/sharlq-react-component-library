
import "./card.css"
import React from 'react'
const CardImg = ({src,alt}) => {
    return (
        <div className="img-container">
       <img src={src} className="img" alt={alt}></img>
       </div>
    )
}

export  {CardImg}
