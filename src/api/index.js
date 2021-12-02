import axios from "axios";

export const getPlacesData = async (query, type) => {
  try {
    const { data } = await axios.get(
      `https://safe-eyrie-23497.herokuapp.com/locations/${query}/${
        type ? type : "Hotels"
      }`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("err:", error);
  }
};

// `http://localhost:2233/locations/${query}/${
//   type ? type : "Hotels"
//   }`
