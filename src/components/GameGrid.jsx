import useGames from "../hooks/useGames";
import Gcards from "./Gcards";
import PlatSelect from "./PlatSelect";

const GameGrid = () => {
  const { games, err } = useGames();
  return (
    <>
      <PlatSelect />

      {err && <h1>{err}</h1>}
      <div
        className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
      gap-4 justify-items-center m-2"
      >
        {games.map((game) => (
          <Gcards key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
