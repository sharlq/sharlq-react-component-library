
import "./card.css"
const CardImg = ({src,alt}) => {
    return (
        <div className="img-container">
       <img src={src} className="img" alt={alt}></img>
       </div>
    )
}

export  {CardImg}
