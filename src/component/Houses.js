import React, { useEffect } from "react"
import House from "./House";


function Houses({data}) {
  return (
    <>
    <div className="container">

       <div className="row">

{
    data.length===0?<div>No houses to display</div>:
    data.map((house, index)=>{
    return <House name = {house.name} region = {house.region} words = {house.words} key = {index}  id={house.id}/>;
})}
</div>
</div>
    </>
  )
}

export default Houses