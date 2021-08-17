import React, { useState, useRef, useCallback } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';

import useStyles from "./styles";

const Header = ({ setCoords }) => {
    const classes = useStyles();
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
    });
    const geocoderContainerRef = useRef();
    const mapRef = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Box className={classes.box}>
                    <Typography variant="h5" className={classes.title1}>
                        Travel Advisor
                    </Typography>
                    <Typography variant="h6" className={classes.title2}>
                        Explore new places
                    </Typography>
                </Box>
                <div>
                    <div
                        className={classes.refContainer}
                        ref={geocoderContainerRef}
                    />
                    <MapGL
                        ref={mapRef}
                        width="0%"
                        height="0%"
                        onViewportChange={handleViewportChange}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                    >
                        <Geocoder
                            mapRef={mapRef}
                            containerRef={geocoderContainerRef}
                            onViewportChange={handleViewportChange}
                            placeholder="Search places"
                            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                            position="top-left"
                            onResult={({result : {geometry : {coordinates} } }) => setCoords({lat: coordinates[1], lng: coordinates[0]}) }
                        />
                    </MapGL>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;