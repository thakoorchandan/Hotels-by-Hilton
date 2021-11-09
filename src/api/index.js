import axios from "axios";

export const getPlacesData = async (type, ne, sw) => {
  try {
    const { data } = await axios.get(
      `http://localhost:2233/locations/Bengaluru/${type}`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};
