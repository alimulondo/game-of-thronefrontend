import React, { useState} from "react"
import  NavEntry  from './NavEntry';
import Axios from "axios";
import { Link } from "react-router-dom";






const search = [
      "Name",
      "Region",
      "Words",
      "HasWords",
      "HasNoWords",
      "HasTitles",
      "HasNoTitles",
      "HasSeats",
      "HasNoSeats",
      "HasDiedOut",
      "HasNotDiedOut",
      "HasAncestralWeapons",
      "HasNoAncestralWeapons"
]
 



function NavHead({query,setSearchKey, onSearch, onSetOption, onSetName}) {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark justify-content-end">
  <div className="container-fluid text-white">
    <Link className="navbar-brand text-white" to="/">Game-Of-Throne</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Search-by
          </a>
          <ul className="dropdown-menu">
            {search.map((val, index)=>{
                return (
                 <NavEntry item = {val}  key = {index} settingOption={onSetOption} settingName={onSetName}/>
                );
            })}
            
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search" onSubmit={e=>onSearch(e)} >
        <input className="form-control me-2" type="search" placeholder="Search By:"  
        aria-label="Search"  name = "searchKey" onChange={e => setSearchKey(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavHead