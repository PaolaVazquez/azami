import{BsCart4} from "react-icons/bs"
import {BsBookmarkHeart } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./CartWidget.css"

export const CardWidget = ({numero}) => {
  return (
    <div className="container-cart">
      <BsBookmarkHeart size={30} color="#937EBF" />
      <Link to="/cart">
        <BsCart4 size={30} color="#937EBF"/>
        <div className="bubble-counter">
          <span><h6>0</h6></span>
        </div>
        
      </Link>
      
    </div>
  )
}
