import React, { useEffect } from "react"



function HouseDetails(details) {
  return (
    <>
<div className="list-group mt-5">
  <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Name</h5>
    </div>
    <p className="mb-1">{details.name}</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Region </h5>
    </div>
    <p className="mb-1">{details.region}</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Words</h5>
    </div>
    <p className="mb-1">{details.words}</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Coat Of Arms</h5>
    </div>
    <p className="mb-1">{details.coatOfArms}</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Current Lord</h5>
    </div>
    <p className="mb-1">{details.currentLord}</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Heir</h5>
    </div>
    <p className="mb-1">{details.heir}</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Overlord</h5>
    </div>
    <p className="mb-1">{details.overlord}</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Founded</h5>
    </div>
    <p className="mb-1">{details.founded}</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Died Out</h5>
    </div>
    <p className="mb-1">{details.diedOut}</p>
  </a>
</div>



    </>
  )
}

export default HouseDetails