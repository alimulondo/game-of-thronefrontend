import React, { useEffect } from "react"
import NavHead from "./NavHead"
import House from "./House"

const houses =[
        {"name":"House Ambrose", "region":"The Reach","words": "Never Resting", "id":4},
        {"name":"House Arryn of Gulltown", "region":"The North","words": "The Vale", "id":6},
        {"name":"House Ashwood", "region":"The North","words": "", "id":9},
        {"name":"House Ashwood", "region":"The North","words": "", "id":10},

]

function Home() {
  return (
    <>
        <NavHead />
        {houses.map((house)=>{
           return <House name = {house.name} region = {house.region} words = {house.words} id = {house.id}/>;
        })}

        
    </>
  )
}

export default Home