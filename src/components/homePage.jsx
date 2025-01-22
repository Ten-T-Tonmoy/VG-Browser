import React from "react";
import Navbar from "./navbar";
import GameGrid from "./GameGrid";
import Genres from "./Genres";
function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] grid-rows-[auto_1fr]">
      <div className="col-span-1 lg:col-span-2">
        <Navbar />
      </div>

      <div className="hidden  lg:block shadow-lg dark:bg-gray-900 bg-gray-200 ">
        <Genres />
      </div>

      <div className="bg-gray-200 dark:bg-gray-900">
        <GameGrid />
      </div>
    </div>
  );
}

export default Home;
