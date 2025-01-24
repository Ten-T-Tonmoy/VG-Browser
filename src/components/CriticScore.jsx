const CriticScore = ({ game }) => {
  return (
    <div
      className="text-green-500
    bg-green-100  h-[40px] items-center mt-3
    px-3 py-1 w-[55px] rounded-md
    dark:text-gray-300 dark:bg-gray-400"
    >
      {game.metacritic}
    </div>
  );
};

export default CriticScore;
