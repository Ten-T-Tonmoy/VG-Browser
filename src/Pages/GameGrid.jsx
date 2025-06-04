import useGames from "../hooks/useGames";
import Gcards from "./Gcards";
import PlatSelect from "./PlatSelect";
import { useState } from "react";
import GcardSkeleton from "./GcardSkeleton";

//shits u need to do
//filter by genre then by platform since common(he using to change the url)

const GameGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [selectplat, setSelectPlat] = useState(null);
  const { games, err, loading } = useGames();
  // console.log(games);

  const filteredGames = selectplat
    ? games.filter((game) =>
        game.platforms.some((p) =>
          p.platform.name.toLowerCase().includes(selectplat.name.toLowerCase())
        )
      )
    : games;

  return (
    <>
      <PlatSelect
        platSelected={(e) => setSelectPlat(e)}
        selected={selectplat}
      />

      {err && <h1>{err}</h1>}
      <div
        className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      gap-4 justify-items-center m-2"
      >
        {loading && skeletons.map((skel) => <GcardSkeleton key={skel} />)}
        {filteredGames?.map((game) => (
          <Gcards key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
