import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Loader from "../Component/Loader";


function Hotels() {
    const [searchParams,setSearchParams] = useSearchParams();
    const destination = searchParams.get("destination");
    const room = JSON.parse(searchParams.get("options")).room;
 
 

  
  const {isLoading,data} = useFetch("http://localhost:5000/hotels",
  `host_location_like=${destination || ""}&name_like${destination || ""}&accommodates_gte=${room || 1}`
  //  `q=${destination || ""}&accommodates_gte=${room || 1}}`
   //name_like,host_location_like
    );

    if(isLoading) <Loader/>;
    // return <div>{data.length}</div>
  
  return (
    <div className="searchList">
      <h2>Search Result({data.length})</h2>
      {
        data.map((item)=>{
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