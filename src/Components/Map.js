import "./Map.css";
import React, { useEffect, useState } from "react";
import { mappls } from "mappls-web-maps";

const Map = () => {
  const styleMap = { width: "99%", height: "100%", display: "inline-block" };
  const mapProps = {
    traffic: false,
    zoom: 16,
    geolocation: false,
    clickableIcons: false,
  };

  const [mapObject, setMapObject] = useState(null);

  useEffect(() => {
    const mapplsClassObject = new mappls();

    mapplsClassObject.initialize("a66f20fb2b7761fbd30d59ad55ced604", () => {
      const newMapObject = mapplsClassObject.Map({
        id: "map",
        properties: mapProps,
      });
      setMapObject(newMapObject);

      newMapObject.on("load", () => {
        // Activities after map load
        // Call the geolocation function here
        fetchUserLocation(newMapObject);
      });
    });
  }, []);

  const fetchUserLocation = (mapObject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Set the map's center to the user's location
          if (mapObject) {
            mapObject.setCenter([longitude, latitude]);

            // Create a custom marker using an img element
            const marker = document.createElement("img");
            marker.src = "../Assets/marker.png"; // Replace with your marker image URL
            marker.className = "custom-marker";

            // Position the marker on the map
            mapObject.getCanvas().appendChild(marker);
          } else {
            console.error("MapObject is not set.");
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="home">
      <div id="map" style={styleMap}></div>
    </div>
  );
};

export default Map;
