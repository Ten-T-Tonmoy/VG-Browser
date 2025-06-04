import React, { useState } from "react";
import Navbar from "../components/navbar";
import GameGrid from "./GameGrid";
import Genres from "./Genres";
function Home() {
  const [query, setQuery] = useState({
    genre: "",
  });

  return (
    <div
      className="grid pt-20 grid-cols-1 lg:grid-cols-[220px_1fr] dark:bg-gray-900
     bg-gray-200grid-rows-[auto_1fr]"
    >
      <div className="hidden  lg:block shadow-lg  ">
        <Genres
          gen={query.genre}
          handleGenre={(genre) => setQuery({ ...query, genre })}
        />
      </div>

      <div className="bg-gray-200 dark:bg-gray-900">
        <GameGrid />
      </div>
    </div>
  );
}

export default Home;
