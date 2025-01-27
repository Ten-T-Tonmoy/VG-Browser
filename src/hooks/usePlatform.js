import { useState, useEffect } from "react";
import apiClient from "../services/apiClient"; // Adjust the import path as necessary

const usePlatform = () => {
  const [plats, setPlats] = useState([]);
  const [err, setErr] = useState("");

  //if error occurs the list doesn go blank
  useEffect(() => {
    apiClient
      .get("/platforms/lists/parents")
      .then((res) => {
        setPlats(res.data.results);
        setErr("");
      })
      .catch((err) => {
        setErr(err.message);
        setPlats([]);
      });
  }, []);
  return { plats, err };
};
export default usePlatform;
