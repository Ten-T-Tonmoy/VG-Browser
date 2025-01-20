import React from "react";
import Navbar from "./navbar";
import GameGrid from "./GameGrid";
function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] grid-rows-[auto_1fr]">
      <div className="col-span-1 lg:col-span-2">
        <Navbar />
      </div>

      <div className="hidden lg:block bg-red-400">side</div>

      <div className="bg-gray-200">
        <GameGrid />
      </div>
    </div>
  );
}

export default Home;
