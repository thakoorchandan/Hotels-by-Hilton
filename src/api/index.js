import axios from "axios";

export const getPlacesData = async (type, ne, sw) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/${type}`, {
      params: {
        bl_latitude: ne.lat,
        tr_latitude: sw.lat,
        bl_longitude: ne.lng,
        tr_longitude: sw.lng,
        limit: "10",
      },
    });
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};

// import axios from "axios";

// export const getPlacesData = async (type, ne, sw) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
//       {
//         params: {
//           bl_latitude: ne.lat,
//           tr_latitude: sw.lat,
//           bl_longitude: ne.lng,
//           tr_longitude: sw.lng,
//           limit: "10",
//         },
//         headers: {
//           "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//           "x-rapidapi-key":
//             "16d044cab1msh3178dbd191e3911p13daf8jsn5d855baaeaa3",
//         },
//       }
//     );
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error:", error);
//   }
// };
