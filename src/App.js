import React, { useEffect, useState } from "react"
import Axios from 'axios';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import NavHead from './component/NavHead';
import Houses from './component/Houses';
import SingleHouse from './component/SingleHouse';

function App() {
const [houses, setHouses] = useState([]);
const [searchKey, setSearchKey] = useState();


async function handleSubmit(e){
  e.preventDefault();
  try{
    await Axios.get('http://localhost:8080/api/v1/houses/name', {
          params:{name:searchKey}
   }).then(resp=>{
    setHouses(resp.data);
    console.log(resp);
   })
   console.log("Request Submitted");
  }catch(e){

  }
}
  return (

    <>
    <BrowserRouter>
      <NavHead  query={searchKey} setSearchKey={setSearchKey} onSearch={handleSubmit}/>
        <Routes>
           <Route path="/" element = { <Houses data={houses} />} />
           <Route path ="/45" element = { <SingleHouse /> } />
        </Routes>
    
    </BrowserRouter>
    
      
    </>
  )
}

export default App