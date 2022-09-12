import React, { useEffect } from "react"



function House(props) {
  return (
    <>
      
 <div className="card w-100 mt-5">
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Region : {props.region}</p>
    <p className="card-text">Words : {props.words}</p>
    <a href="#" className="btn btn-primary">Detials</a>
  </div>
</div>
    </>
  )
}

export default House