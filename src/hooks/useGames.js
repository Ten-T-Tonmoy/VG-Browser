import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  //if error occurs the list doesn go blank
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get("/games")
      .then((res) => {
        setLoading(false);
        setGames(res.data.results);
        setErr("");
      })
      .catch((err) => {
        setLoading(false);
        setErr(err.message);
        setGames([]);
      });

    return () => controller.abort();
  }, []);
  return { games, err };
};

export default useGames;
