import React, { useEffect } from "react"


const searchOptions = {
                        "Name": "http://localhost:8080/api/v1/houses/name",
                        "Region": "http://localhost:8080/api/v1/houses/region",
                        "Words": "http://localhost:8080/api/v1/houses/words",
                        "HasWords": "http://localhost:8080/api/v1/houses/haswords",
                        "HasNoWords": "http://localhost:8080/api/v1/houses/haswords",
                        "HasTitles":"http://localhost:8080/api/v1/houses/hastitles",
                        "HasNoTitles":"http://localhost:8080/api/v1/houses/hastitles",
                        "HasSeats":"http://localhost:8080/api/v1/houses/hasseats",
                        "HasNoSeats":"http://localhost:8080/api/v1/houses/hasseats",
                        "HasDiedOut":"http://localhost:8080/api/v1/houses/hasdiedout",
                        "HasNotDiedOut":"http://localhost:8080/api/v1/houses/hasdiedout",
                        "HasAncestralWeapons":"http://localhost:8080/api/v1/houses/hasancestralweapons",
                        "HasNoAncestralWeapons":"http://localhost:8080/api/v1/houses/hasancestralweapons",
                      };

 

function NavEntry({item, settingOption, settingName}) {
  
  return (
    <>
       <li><a className="dropdown-item" href="#" onClick={()=>{
        settingOption(searchOptions[item]);
        settingName(item);
       }
           
       }>{item}</a></li>
        <li><hr className="dropdown-divider" /></li>
    </>
  )
}

export default NavEntry