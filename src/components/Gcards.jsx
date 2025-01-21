import React from "react";
import PlatIcons from "./PlatIcons";
import CriticScore from "./CriticScore";
const Gcards = ({ game }) => {
  return (
    <div
      className="bg-white w-[360px]
    rounded-md "
    >
      <img
        className="rounded-md bg-gray-100"
        src={game.background_image}
        alt=""
      />
      <div>
        <div
          className="flex font-mono my-2 font-bold 
        text-[30px] text-center justify-center"
        >
          {game.name}
        </div>
        <CriticScore game={game} />
        <PlatIcons game={game} />
      </div>
    </div>
  );
};

export default Gcards;
