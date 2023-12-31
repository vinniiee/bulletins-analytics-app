import axios from "axios";
import { Feature, } from "geojson";
// import { feature } from "topojson";

const apiUrl = import.meta.env.VITE_API_URL;
// const apiUrl = "http://localhost:3000";

const mapApi = axios.create({
  baseURL: apiUrl + "/map",
  headers: {
    Accept: "application/json",
  },
});

export const getMapFeatures = async () => {
  try{
    const response = await mapApi.get("");
  console.log("response", response);

//   const { countries } = response.data.objects;
  const features = response.data.features as unknown as Feature[];
  return features;
  }catch(e){
    console.log(e)
  }
};
