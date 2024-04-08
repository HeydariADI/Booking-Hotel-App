<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useHotels } from "./Context/HotelsProvider"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useSearchParams } from "react-router-dom";
=======
import { useState } from "react";
import { useHotels } from "./Context/HotelsProvider"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
>>>>>>> 978602c0e6f94da4b9c6ec514b378b88df37de24



function Map() {
  const {isloading,hotels} = useHotels();
<<<<<<< HEAD
  const [mapCenter,setMapcenter] = useState([51.505, -0.09]);
  const [searchParams,setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(()=>{
    if(lat & lng) setMapcenter([lat,lng]);
  },[lat,lng])

  return (
    <div className="mapContainer">
      <MapContainer
        className="map"
        center={mapCenter}
        zoom={6}
        scrollWheelZoom={true}
      >
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
     <ChangeCenter position={mapCenter} />
        {hotels.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>{item.host_location}</Popup>
          </Marker>
        ))}
      </MapContainer>
  
    </div>
  );
=======
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
>>>>>>> 978602c0e6f94da4b9c6ec514b378b88df37de24
}

export default Map

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}