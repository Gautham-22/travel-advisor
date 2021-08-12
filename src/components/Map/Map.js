import React from "react";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles";

const Map = ({coords, setCoords, setBounds}) => {
    const classes = useStyles();
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "your_api_key"}}
                defaultCenter={coords}
                center={coords}
                zoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    setCoords({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne : e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
            >

            </GoogleMapReact>
        </div>
    );
};

export default Map;