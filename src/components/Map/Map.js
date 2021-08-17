import React from "react";
import { useMediaQuery, Paper, Typography  } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import Rating from "@material-ui/lab/Rating";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import useStyles from "./styles";

const Marker = ({place}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery("(min-width: 600px)");
    // return result of a css mediaQuery - here return true if screen > 600px, also it works like actual css mediaquery
    // (i.e.,) value of isDesktop changes if we resize the window (more like a state in React).

    return (
        <div className={classes.markerContainer}>
            {isDesktop ? (
                <Paper className={classes.paper}>   {/* it is a simple div with coloured background */ }
                    <Typography variant="subtitle2" style={{overflowWrap: "break-word" }}>{place.name}</Typography>
                    <img  
                        className={classes.pointer}
                        src={place.photo ? place.photo.images.small.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                        alt={place.name}
                    />
                    {place.rating && (
                        <Rating size="small" value={parseFloat(place.rating)} precision={0.5} readOnly />
                    )}
                </Paper>
            ) : (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
            )}
        </div>
    );
}

const Map = ({ coords, setCoords, setBounds, places, setChildClicked }) => {
    const classes = useStyles();
    // children of GoogleMapReact (i.e, markers in map) must be a react component
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_APIKEY }}
                defaultCenter={{ lat: 51.506, lng: -0.169 }}
                center={coords}
                zoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    setCoords({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne : e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(clickedKeyValue) => {
                    setChildClicked(Number(clickedKeyValue));
                }}
            >
                {places?.length && places.map((place,i) => {
                    let latitude = parseFloat(place.latitude) ? parseFloat(place.latitude) : 0;
                    let longitude = parseFloat(place.longitude) ? parseFloat(place.longitude) : 0;
                    return ( 
                        <Marker 
                            place={place} 
                            lat={latitude}
                            lng={longitude}
                            key={i}
                        />
                    );
                })}
            </GoogleMapReact>
        </div>
    );
};

export default Map;