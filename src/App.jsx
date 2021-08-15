import React, { useState, useEffect} from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import getPlaceDetails from "./api/travelAdvisorApi";

const App = () => {
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");
    const [places, setPlaces] = useState([]);

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);

    const [isLoading,setIsLoading] = useState(false);
    const [childClicked,setChildClicked] = useState();

    // executed only once when the component is mounted
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
            setCoords({lat: latitude, lng: longitude});
        })
        // setCoords({lat: "35.689487", lng: "139.691706"});
    },[]);

    // executed everytime when coords or bounds changes 
    useEffect(() => {
        if(bounds) {
            setIsLoading(true);  // showing loading icon while doing api call
            getPlaceDetails(type,bounds).then(data => {
                if(data) {
                    data = data.filter((place) => place.name && place.latitude);  // collecting places that have name and lattitude
                    setPlaces(data);
                    setIsLoading(false);  // removing loading icon after api call
                } else {
                    setPlaces([]);
                }
            });
        }
    },[bounds,type]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width : "100%"}}>
                <Grid item xs={12} md={4}>
                    <List 
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating} 
                        places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        coords={coords}
                        setCoords={setCoords}
                        setBounds={setBounds}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;