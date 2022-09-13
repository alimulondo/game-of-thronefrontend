import React, { useEffect } from "react"

function HouseSubDetails(val) {
  return (
    <>
  <ol className="list-group list-group-numbered">
  <li className="list-group-item">{val.element}</li>
</ol>
    </>
  )
}

export default HouseSubDetails