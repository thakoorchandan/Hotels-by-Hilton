import axios from "axios";

export const getPlacesData = async (query, type) => {
  try {
    const { data } = await axios.get(
      `http://localhost:2233/locations/${query}/${type ? type : "Hotels"}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};
