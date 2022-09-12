import React, { useEffect } from "react"


function NavHead() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark justify-content-end">
  <div className="container-fluid text-white">
    <a className="navbar-brand text-white" href="#">Game-Of-Throne</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Search-by
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">HasTittles</a></li>
            <li><a className="dropdown-item" href="#">NoTittles</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavHead