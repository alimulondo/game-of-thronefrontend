import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Axios from "axios";




function House(props) {
    
  return (
    <>

          
 <div className="card w-100 mt-5">
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Region : {props.region}</p>
    <p className="card-text">Words : {props.words}</p>
    <Link to={`/house/${props.id}`} className="btn btn-primary"  >Detials</Link>
  </div>
</div>
    </>
  )
}

export default House