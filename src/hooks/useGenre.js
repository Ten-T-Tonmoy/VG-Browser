import { useState, useEffect } from "react";
import apiClient from "../services/apiClient"; // Adjust the import path as necessary

const useGenre = () => {
  const [genres, setGenres] = useState([]);
  const [err, setErr] = useState("");

  //if error occurs the list doesn go blank
  useEffect(() => {
    apiClient
      .get("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setErr("");
      })
      .catch((err) => {
        setErr(err.message);
        setGenres([]);
      });
  }, []);
  return { genres, err };
};
export default useGenre;
