import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "abe9f8901dae40e8a092ed550547844b",
  },
});
