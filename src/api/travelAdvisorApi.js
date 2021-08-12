import axios from "axios";

async function getPlaceDetails(type,bounds) {
  
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  var options = {
    params: {
      bl_latitude: bounds.sw.lat,
      tr_latitude: bounds.ne.lat,
      bl_longitude: bounds.sw.lng,
      tr_longitude: bounds.ne.lng,
    },
    headers: {
      'x-rapidapi-key': 'your_api_key',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const { data : { data }} = await axios.get(URL,options);
    console.log(data);
    return data;
  } catch(err) {
    console.log(err.message);
  }

}

export default getPlaceDetails;