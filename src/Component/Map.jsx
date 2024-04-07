import { useState } from "react";
import { useHotels } from "./Context/HotelsProvider"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useSearchParams } from "react-router-dom";



function Map() {
  const {isloading,hotels} = useHotels();
  const [mapCenter,setMapcenter] = useState([20,3]);
  const [searchParams,setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className="mapContainer">
      <MapContainer
       className="map" 
       center={[lat || 50,lng || 3]} 
       zoom={13} 
       scrollWheelZoom={true}
       >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* show hotels on map */}
    {hotels.map((item)=>(
        <Marker key={item.id} position={[item.longitude,item.longitude] }>
        <Popup>
          {item.host_location}
        </Popup>
      </Marker>
    ))}
  
  </MapContainer>
  
    </div>
  )
}

export default Map