import React, { useEffect } from "react"

function NavEntry(props, index) {
  return (
    <>
       <li><a className="dropdown-item" href="#">{props.item}</a></li>
        <li><hr className="dropdown-divider" /></li>
    </>
  )
}

export default NavEntry