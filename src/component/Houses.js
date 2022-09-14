import React, { useEffect } from "react"
import House from "./House";


function Houses({data}) {
    console.log(data)
  return (
    <>
    <div className="container">

       <div className="row">

{
    data.length===0?<div>No houses to display</div>:
    data.map((house)=>{
    return <House name = {house.name} region = {house.region} words = {house.words} key = {house.id} />;
})}
</div>
</div>
    </>
  )
}

export default Houses