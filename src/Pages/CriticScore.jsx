const CriticScore = ({ game }) => {
  return (
    <div
      className="text-green-500
    bg-green-100  px-3 py-1  rounded-md
    dark:text-gray-300 dark:bg-gray-400"
    >
      {game.metacritic}
    </div>
  );
};

export default CriticScore;
