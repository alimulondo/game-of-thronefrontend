import React, { useEffect } from "react"

function NavEntry(props, index) {
  function sendRequest(index){
        alert("index : "+props.item);
  }
  return (
    <>
       <li><a className="dropdown-item" href="#" onClick={sendRequest}>{props.item}</a></li>
        <li><hr className="dropdown-divider" /></li>
    </>
  )
}

export default NavEntry