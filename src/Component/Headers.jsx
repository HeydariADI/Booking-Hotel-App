import {MdLocationOn} from "react-icons/md"
import {HiCalendar, HiMinus, HiPlus, HiSearch} from "react-icons/hi"
import { useRef, useState } from "react"
import useOutesideClick from "../Hooks/useOutesideClick";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns";

function Headers() {
    const [destination , setDestination] = useState("");
    const [openOptions,setOpenOptions] = useState(false);
    const [options,setoptions] = useState ({
        adult : 1,
        children : 0,
        room : 1,
    })

    const[date,setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);
    const[opendate,setOpenDate] = useState(false);


const handleOptions = (name,operation) => {
    setoptions ((prev) =>{
        return {
            ...prev ,
            [name] : operation === "inc" ? options[name] +1 : options[name] -1,
        }
    })
}

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
                <div onClick={()=>setOpenDate(!opendate)} className="dateDropDown">
                    {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}
                </div>
                {opendate && <DateRange
                 onChange={(item) => setDate([item.selection])}
                  ranges={date} 
                  className="date"
                  minDate={new Date()}
                  moveRangeOnFirstSelection = {true}
                  />}
                <span className="seperator"></span>
            </div>
            <div className="headerSearchItem">
                <div id="optionDropDown" onClick={()=>setOpenOptions(!openOptions)}>
                   {options.adult} adult &bull; {options.children}children &bull; {options.room} room
                </div>
                {openOptions && <GuestOptionsList setOpenOptions={setOpenOptions} options={options} handleOptions = {handleOptions}/>}
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

function GuestOptionsList({options,handleOptions,setOpenOptions}) {
    const optionRef = useRef();
    useOutesideClick(optionRef,"optionDropDown",() => setOpenOptions(false));

    return(
        <div className="guestOptions" ref={optionRef}>
            <OptionItem handleOptions={handleOptions} type = "adult" options = {options} minLimit = {1}/>
            <OptionItem handleOptions={handleOptions} type = "children" options = {options} minLimit = {0}/>
            <OptionItem handleOptions={handleOptions} type = "room" options = {options} minLimit = {1}/>
      
    </div>

    )
  
    
}

function OptionItem ({options,type,minLimit,handleOptions}) {
    return (
        <div className="guestOptionItem">
        <span className="optionText">{type}</span>
        <div className="optionCounter">
            <button 
            onClick={() => handleOptions(type,"dec")}
            className="optionCounterBtn"
            disabled = {options[type] <= minLimit}
            >
                <HiMinus classNameicon/>
            </button>
            <span className="optionCounterNumber">{options[type]}</span>
            <button 
            onClick={() => handleOptions(type,"inc")}
            className="optionCounterBtn">
                <HiPlus className="icon"/>
            </button>
        </div>
    </div>
    )
}