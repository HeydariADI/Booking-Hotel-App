import { Link } from "react-router-dom";

import Loader from "../Component/Loader";
import {  useHotels } from "./Context/HotelsProvider";


function Hotels() {
const {isLoading,hotels} = useHotels();

    if(isLoading) <Loader/>;
  return (
    <div className="searchList">
      <h2>Search Result({hotels.length})</h2>
      {
        hotels.map((item)=>{
          return <Link key={item.id} 
          to={`/hotels/${item.id}?lat=${item.latitude}&lng={item.langitude}`}>
            <div className="searchItem">
              <img src={item.picture_url.url} alt={item.name} />
              <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price">€&nbsp;{item.price}&nbsp;<span>night</span></p>
              </div>
            </div>
          </Link>
        })
      }

    </div>
  )
}

export default Hotels