import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();

        if (!granted) return;

        const {
          coords: { latitude, longitude }, // Use coords property to get latitude and longitude
        } = await Location.getLastKnownPositionAsync();

        setLocation({ latitude, longitude }); // Set location as an object
      } catch (error) {
        console.log(error);
      }
    };

    getLocation();
  }, []); // Make sure to add an empty dependency array to useEffect

  return location; // Return the location
};

export default useLocation;
