import { useState, useEffect } from "react";
import apiClient from "../services/apiClient"; // Adjust the import path as necessary
import { CanceledError } from "axios";

const useGenre = () => {
  const [genres, setGenres] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  //if error occurs the list doesn go blank
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setErr("");
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setGenres([]);
        setLoading(false);
      });

    return () => controller.abort();
    //cleanup func?
  }, []);
  return { genres, err, loading };
};
export default useGenre;
