import axios from "axios";

async function getPlaceDetails(type,bounds) {
  
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  var options = {
    params: {
      bl_latitude: String(bounds.sw.lat),
      tr_latitude: String(bounds.ne.lat),
      bl_longitude: String(bounds.sw.lng),
      tr_longitude: String(bounds.ne.lng),
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const { data : { data }} = await axios.get(URL,options);
    return data;
  } catch(err) {
    console.log(err.message);
  }

}

export default getPlaceDetails;