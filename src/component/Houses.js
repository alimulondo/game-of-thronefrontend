import React, { useEffect } from "react"
import House from "./House";

const houses =[
    {"name":"House Ambrose", "region":"The Reach","words": "Never Resting", "id":4},
    {"name":"House Arryn of Gulltown", "region":"The North","words": "The Vale", "id":6},
    {"name":"House Ashwood", "region":"The North","words": "", "id":9},
    {"name":"House Ashwood", "region":"The North","words": "", "id":10},

]

function Houses() {
  return (
    <>
    <div className="container">

       <div className="row">

{houses.map((house)=>{
    return <House name = {house.name} region = {house.region} words = {house.words} key = {house.id} />;
})}
</div>
</div>
    </>
  )
}

export default Houses