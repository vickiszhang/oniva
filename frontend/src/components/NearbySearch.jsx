import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NearbySearch = ({ radius, type }) => {
  const [places, setPlaces] = useState([]);
  const latitude = 49.2606; // UBC coordinates
  const longitude = 123.2460;
  const location_type = (type == "park") ? "park" : null ; 
  const API_KEY = "AIzaSyBA9ucSHQ91-B5KCdsg81tWadWSXCgWdzI"

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${location_type}&key=${API_KEY}`
      );
      setPlaces(response.data.results); 
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Nearby Places</h1>
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NearbySearch;
