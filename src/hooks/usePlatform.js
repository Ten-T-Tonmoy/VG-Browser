import { useState, useEffect } from "react";
import apiClient from "../services/apiClient"; // Adjust the import path as necessary

const usePlatform = () => {
  const [plats, setPlats] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  //if error occurs the list doesn go blank
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get("/platforms/lists/parents")
      .then((res) => {
        setLoading(false);
        setPlats(res.data.results);
        setErr("");
      })
      .catch((err) => {
        setLoading(false);
        setErr(err.message);
        setPlats([]);
      });

    return () => controller.abort();
  }, []);
  return { plats, err };
};
export default usePlatform;
