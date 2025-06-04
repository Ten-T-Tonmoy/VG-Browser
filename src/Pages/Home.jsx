import React, { useState } from "react";
import GameGrid from "./GameGrid";
import Genres from "./Genres";
function Home() {
  const [query, setQuery] = useState({
    genre: "",
  });

  return (
    <div
      className="grid h-screen pt-20 grid-cols-1 overflow-y-hidden
        lg:grid-cols-[220px_1fr] dark:bg-gray-900
      bg-gray-200grid-rows-[auto_1fr] "
    >
      <Genres
        gen={query.genre}
        handleGenre={(genre) => setQuery({ ...query, genre })}
      />

      {/**adjust pb on necessary */}
      <div className="overflow-y-auto pb-20 dark-sidebar">
        <GameGrid />
      </div>
    </div>
  );
}

export default Home;
