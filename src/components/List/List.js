import React, {useEffect, useState, createRef} from "react";
import { Typography, FormControl, InputLabel, Select, MenuItem, Grid, CircularProgress } from "@material-ui/core";
import PlaceDetails  from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

const List = ({ type, setType, rating, setRating, places, childClicked, isLoading }) => {
    const classes = useStyles();
    const [elementRefs,setElementRefs] = useState([]);

    // Array(5) creates an array of length 5 with empty values, fill() - fills values as undefined
    // Then we loop through that array and created a ref array
    useEffect(() => {
        if(places?.length) {
            let refs = Array(places.length).fill().map((_,i) => elementRefs[i] || createRef());
            setElementRefs(refs);
        }
    },[places]); 
    
    if(isLoading) {
        return (
            <div className={classes.container}>
                 <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            </div>
        );
    }else {
        return (
            <div className={classes.container}>
                <Typography variant="h4" className={classes.heading}>
                    Restaurants, Hotels & Attractions around you
                </Typography>
                <div className={classes.forms}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="type">Type</InputLabel>
                        <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                        <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="3">Above 3.0</MenuItem>
                            <MenuItem value="4">Above 4.0</MenuItem>
                            <MenuItem value="4.5">Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Grid container className={classes.list}>
                    {places?.map((place,i) => (
                        <Grid ref={elementRefs[i]} key={i} item xs={12} >
                            <PlaceDetails selected={childClicked === i} refProp={elementRefs[i]} place={place}/>
                        </Grid>
                    ))}
                    {places.length === 0 && (
                        <Grid item xs={12} >
                            <div style={{marginLeft: "20px"}}>
                                <Typography variant="subtitle2" color="textSecondary">
                                    No {type} found!
                                </Typography>
                            </div>
                        </Grid>
                    )}
                </Grid> 
            </div>
        );
    }
};

export default List;