import useGames from "../hooks/useGames";
import Gcards from "./Gcards";
import PlatSelect from "./PlatSelect";
import { useState } from "react";

//shits u need to do
//filter by genre then by platform since common(he using to change the url)

const GameGrid = () => {
  const [selectplat, setSelectPlat] = useState(null);
  const { games, err } = useGames();
  console.log(games);
  const filteredGames = selectplat
    ? games.filter((game) => game.platform === selectplat.id)
    : games;
  return (
    <>
      <PlatSelect platSelected={setSelectPlat} selected={selectplat} />

      {err && <h1>{err}</h1>}
      <div
        className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      gap-4 justify-items-center m-2"
      >
        {filteredGames?.map((game) => (
          <Gcards key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
