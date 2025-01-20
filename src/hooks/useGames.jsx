import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [err, setErr] = useState("");
  //if error occurs the list doesn go blank
  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => {
        setGames(res.data.results);
        setErr("");
      })
      .catch((err) => {
        setErr(err.message);
        setGames([]);
      });
  }, []);
  return { games, err };
};

export default useGames;
