import axios from "axios";
import { key } from "./constants";
const BaseUrl = "https://youtube-v31.p.rapidapi.com";

export const FetchFromApi = async (url) => {
  const options = {
    params: { maxResults: 50,},
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const { data } = await axios.get(`${BaseUrl}/${url}`, options);
  console.log(data)
  return data;
};
