import React from "react";
import PlatIcons from "./PlatIcons";
import CriticScore from "./CriticScore";
import croppedUrl from "../services/imageUrl";
const Gcards = ({ game }) => {
  return (
    <div
      className=" bg-gray-100 cursor-pointer overflow-hidden 
      hover:bg-gray-300 ease-in-out duration-200 dark:hover:bg-gray-700  dark:bg-gray-800 shadow-lg
    rounded-md "
    >
      <img className=" " src={croppedUrl(game.background_image)} alt="" />
      <div className="flex px-3 justify-between items-center">
        <PlatIcons game={game} />
        <CriticScore game={game} />
      </div>
      <div>
        <div
          className="flex font-mono my-2 font-bold 
        text-[30px] dark:text-white text-center justify-center"
        >
          {game.name}
        </div>
      </div>
    </div>
  );
};

export default Gcards;
