import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

//useParams bruh it uses existing url

const useElement = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get(`/games/${slug}`)
      .then((res) => {
        setLoading(false);
        setGame(res.data);
        

        console.log(game);
      })
      .catch((err) => {
        setError(err);
        // setGame(null);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { game, error, loading };
};

export default useElement;
