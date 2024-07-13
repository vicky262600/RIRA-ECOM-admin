import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "pk_test_51Oqnpp053ZU4Tjq4DRtSjiW9WT4Nj6I9GpD3gsCTQVzOaykYKV0rjgyPvybpwcwkGsgB9o9qxlZT9CXwg9d4V5Cf00S1CmNN0N";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken;

// console.log(TOKEN);


// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});