import React, { useEffect } from "react"
import NavHead from "./NavHead"
import House from "./House"
import HouseDetails from "./HouseDetails"

const houses =[
        {"name":"House Ambrose", "region":"The Reach","words": "Never Resting", "id":4},
        {"name":"House Arryn of Gulltown", "region":"The North","words": "The Vale", "id":6},
        {"name":"House Ashwood", "region":"The North","words": "", "id":9},
        {"name":"House Ashwood", "region":"The North","words": "", "id":10},

]

const house =  {"id": "78",
"name": "House Condon",
"region": "The North",
"coatOfArms": "An eagle's head between crossed tridents, red on white",
"words": "",
"titles": [
    ""
],
"seats": [
    ""
],
"currentLord": "",
"heir": "",
"overlord": "https://anapioficeandfire.com/api/houses/66",
"founded": "",
"diedOut": "",
"ancestralWeapons": [
    ""
],
"cadetBranches": [],
"swornMembers": [
    "https://anapioficeandfire.com/api/characters/607"
]
}

function Home() {
  return (
    <>
        <NavHead />
        <HouseDetails  name = {house.name} region = {house.region} 
        coatOfArms = {house.coatOfArms} currentLord = {house.heir} 
        overlord = {house.overlord} founded = {house.founded} diedOut = {house.diedOut}
        />
        {houses.map((house)=>{
           return <House name = {house.name} region = {house.region} words = {house.words} id = {house.id}/>;
        })}

        
    </>
  )
}

export default Home