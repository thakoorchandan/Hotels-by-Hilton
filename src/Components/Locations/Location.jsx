import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import "./Location.css";
import { getPlacesData } from "../../api/index";
import Head from "../HomePage/Header";
import WhereTo from "../HomePage/WhereTo";
import List from "./List/List";
import Map from "./Map/Map";

const Locations = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("hotels");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      setIsLoading(true);
      getPlacesData(type, bounds.ne, bounds.sw).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type]);
  // }, [type, bounds, coordinates]);

  return (
    <>
      <div className="headercss">
        <Head />
      </div>
      <div className="Where_To_sticky">
        <WhereTo />
      </div>

      {/* <Header setCoordinates={setCoordinates} /> */}

      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={10} md={4}>
          <div className="ListData">
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Locations;
