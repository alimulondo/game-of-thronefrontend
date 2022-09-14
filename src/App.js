import React, { useEffect, useState } from "react"
import Axios from 'axios';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import NavHead from './component/NavHead';
import Houses from './component/Houses';
import SingleHouse from './component/SingleHouse';

function App() {
const [houses, setHouses] = useState([]);
const [searchKey, setSearchKey] = useState();
const [option, setOption] = useState();
const [name, setName] = useState();

const urlNames = {
                  "Name":"name",
                  "Region":"region",
                  "Words":"words",
                  "HasWords":"status",
                  "HasNoWords":"status",
                  "HasTitles":"status",
                  "HasNoTitles":"status",
                  "HasSeats":"status",
                  "HasNoSeats":"status",
                  "HasDiedOut":"status",
                  "HasNotDiedOut":"status",
                  "HasAncestralWeapons":"status",
                  "HasNoAncestralWeapons":"status"

                }


async function handleSubmit(e){
  e.preventDefault();
  try{
    const params = new URLSearchParams([[urlNames[name],searchKey]])
    await Axios.get(option, {
          params
   }).then(resp=>{
    setHouses(resp.data);
   })
  }catch(e){

  }
}
  return (

    <>
    <BrowserRouter>
      <NavHead  query={searchKey} setSearchKey={setSearchKey} onSearch={handleSubmit} 
      onSetOption={setOption} onSetName={setName}
      />
        <Routes>
           <Route path="/" element = { <Houses data={houses} />} />
           <Route path ="/45" element = { <SingleHouse /> } />
        </Routes>
    
    </BrowserRouter>
    
      
    </>
  )
}

export default App