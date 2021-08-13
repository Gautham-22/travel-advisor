import React from "react";
import { Card, CardMedia, CardContent, CardActions,Typography, Box, Chip, Button } from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon  from "@material-ui/icons/LocationOn";

import useStyles from "./styles";

const PlaceDetails = ({place}) => {
    const classes = useStyles();
    return (
        <Card elevation={6} style={{margin: "20px 10px"}}>
            <CardMedia 
                style={{height: 350}}
                image={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                {place.price_level && (
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography component="legend">Price</Typography>
                        <Typography variant="subtitle1">{place.price_level}</Typography>
                    </Box>
                )}
                {place.ranking && (
                    <Box display="flex" justifyContent="space-between">
                        <Typography component="legend">Ranking</Typography>
                        <Typography variant="subtitle1" style={{textAlign: "end"}}>{place.ranking}</Typography>
                    </Box>
                )}
                {place.awards?.map(award => (
                    <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                        <img src={award.images.small} />
                        <Typography variant="subtitle2" color="textSecondary">{award.award_type} {award.year}</Typography>
                    </Box>
                ))}
                {place.cuisine?.map(({name}) => (
                    <Chip size="small" key={name} label={name} className={classes.chip}></Chip>
                ))}
                {place.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                        <LocationOnIcon /> {place.address}
                    </Typography>  
                )}
                {place.phone && (
                    <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>  
                )}
            </CardContent>
            <CardActions>
                {place.web_url && (
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url,"_blank") } >
                        Trip Advisor
                    </Button>
                )} 
                {place.website && (
                    <Button size="small" color="primary" onClick={() => window.open(place.website,"_blank") } >
                        Website
                    </Button>
                )}      
            </CardActions>
        </Card>
    )

};

export default PlaceDetails;