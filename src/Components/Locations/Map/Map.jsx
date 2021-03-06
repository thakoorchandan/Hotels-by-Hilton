import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
// import { LocationOnOutlined } from "@material-ui/icons";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div style={{ height: "700px" }} className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBOO-UR0wEN9axd_NdvtYxEsNZx9fQwO4w" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={7}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="small" />
            ) : (
              <Paper elevation={6} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle4"
                  gutterBottom
                >
                  {place.name}
                </Typography>

                {place.ranking_category === "hotel" ? (
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                ) : (
                  <img
                    className={classes.pointer}
                    src={
                      place?.photo?.images?.small?.url
                        ? place.photo.images.small.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                )}
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
