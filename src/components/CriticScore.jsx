const CriticScore = ({ game }) => {
  return (
    <div
      className="text-green-500
    bg-green-100 relative left-60  
    px-3 py-1 w-[55px] rounded-md"
    >
      {game.metacritic}
    </div>
  );
};

export default CriticScore;
