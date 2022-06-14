import axios from "axios";

export const baseUrl = 'http://localhost:5000';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  
  console.log(data);
  
  return data;
}
