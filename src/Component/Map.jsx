import { useState } from "react";
import { useHotels } from "./Context/HotelsProvider"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'



function Map() {
  const {isloading,hotels} = useHotels();
  const [mapCenter,setMapcenter] = useState([
    20,3

  ]);
  return (
    <div className="mapContainer">
      <MapContainer className="map" center={mapCenter} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
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