import React, { useEffect, useState } from "react"
import {useLocation} from 'react-router-dom'
import Axios from "axios"
import HouseDetails from "./HouseDetails"
import HouseSubDetails from "./HouseSubDetails"




 function SingleHouse(props) {
    const [house, setHouse] =useState({});
    const location = useLocation();
    console.log(props, location);
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
    const houseId = getLastItem(location?.pathname);
    
    async function fetchSingleHouse(){

        try{
            
            await Axios.get("http://localhost:8080/api/v1/houses/"+houseId ).then(resp=>{
                setHouse(resp.data);
                
            });
        }catch(e){
    
        }
    }

    useEffect(()=>{
        fetchSingleHouse()

    }, [])
   
   
  return (
    <>
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
           {house.titles?.map((val, index)=>{
              return <HouseSubDetails element = {val} key = {index}/>
           })}
           </div>
           <div className="col"> 
           <h4>Seats</h4> 
           {house?.seats?.map((val, index)=>{
              return <HouseSubDetails element = {val} key={index}/>
           })}
           </div>
        </div>
        <div className="row"> 
           <div className="col"> 
           <h4>Ancestral Weapons</h4> 
           {house?.ancestralWeapons?.map((val, index)=>{
              return <HouseSubDetails element = {val} key={index}/>
           })}
           </div>
           <div className="col"> 
           <h4>Cadet Branches</h4> 
           {house?.cadetBranches?.map((val, index)=>{
              return <HouseSubDetails element = {val}  key={index}/>
           })}
           </div>
        </div>

        <div className="row"> 
           <div className="col"> 
           <h4>Sworn Members</h4> 
           {house?.swornMembers?.map((val, index)=>{
              return <HouseSubDetails element = {val} key={index} />
           })}
           </div>
           
        </div>
        
      </div>

    </>
  )
}

export default SingleHouse