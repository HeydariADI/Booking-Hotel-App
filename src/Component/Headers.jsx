import {MdLocationOn} from "react-icons/md"
import {HiCalendar, HiSearch} from "react-icons/hi"
import { useState } from "react"

function Headers() {
    const [destination , setDestination] = useState("");
    const [openOptions,setOpenOptions] = useState(false);
  return (
    <div className="header">
        <div className="headerSearch">
            <div className="headerSearchItem">
                <MdLocationOn className="headerIcon locationIcon"/>
                <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                 type="text"
                 placeholder="Where to go?" 
                 className="headerSearchInput" 
                 name="destination"  
                 id="destination"/>
                 <span className="seperator"></span>
                
            </div>
            <div className="headerSearchItem">
                <HiCalendar className="headerIcon dateIcon"/>
                <div className="dateDropDown">2023/06/22</div>
                <span className="seperator"></span>
            </div>
            <div className="headerSearchItem">
                <div id="optionDropDown" onClick={()=>setOpenOptions(!openOptions)}>
                    1 adult &bull; 2 children &bull; 1 room
                </div>
                {openOptions && <GuestOptionsList />}
            <span className="seperator"></span>
            </div>
            <div className="headerSearchItem">
                <button className="headerSearchBtn">
                    <HiSearch className="headerIcon"/>
                </button>
            </div>

        </div>
    </div>
  );
}

export default Headers;

function GuestOptionsList() {

    return(
        <div className="guestOptions">
        <div className="guestOptionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
                <button className="optionCounterBtn">-</button>
                <span className="optionCounterNumber">2</span>
                <button className="optionCounterBtn">+</button>
            </div>
        </div>
    </div>

    )
  
    
}