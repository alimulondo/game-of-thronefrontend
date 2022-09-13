import React, { useEffect } from "react"
import NavHead from "./NavHead"
import House from "./House"
import HouseDetails from "./HouseDetails"
import HouseSubDetails from "./HouseSubDetails"

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
        <div className="container">

        <div className="row">
        <HouseDetails  name = {house.name} region = {house.region} 
        coatOfArms = {house.coatOfArms} currentLord = {house.heir} 
        overlord = {house.overlord} founded = {house.founded} diedOut = {house.diedOut}
        />
        </div>
        <div className="row"> 
           <div className="col"> 
           <h4>Titles</h4> 
           {house.titles.map((val)=>{
              return <HouseSubDetails element = {val} />
           })}
           </div>
           <div className="col"> 
           <h4>Seats</h4> 
           {house.seats.map((val)=>{
              return <HouseSubDetails element = {val} />
           })}
           </div>
        </div>
        <div className="row"> 
           <div className="col"> 
           <h4>Ancestral Weapons</h4> 
           {house.ancestralWeapons.map((val)=>{
              return <HouseSubDetails element = {val} />
           })}
           </div>
           <div className="col"> 
           <h4>Cadet Branches</h4> 
           {house.cadetBranches.map((val)=>{
              return <HouseSubDetails element = {val} />
           })}
           </div>
        </div>

        <div className="row"> 
           <div className="col"> 
           <h4>Sworn Members</h4> 
           {house.swornMembers.map((val)=>{
              return <HouseSubDetails element = {val} />
           })}
           </div>
           
        </div>
        
        <div className="row">

        {houses.map((house)=>{
          return <House name = {house.name} region = {house.region} words = {house.words} key = {house.id} />;
        })}
        </div>
        </div>
        
        
       

        
    </>
  )
}

export default Home