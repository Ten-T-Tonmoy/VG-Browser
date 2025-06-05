import React from "react";
import PlatIcons from "./PlatIcons";
import CriticScore from "./CriticScore";
import croppedUrl from "../services/imageUrl";
import { Link } from "react-router-dom";

const Gcards = ({ game }) => {
  return (
    <div
      className=" bg-gray-100 cursor-pointer overflow-hidden 
        hover:bg-gray-300 ease-in-out duration-200 dark:hover:bg-gray-700  dark:bg-gray-800 shadow-lg
        rounded-md "
    >
      <Link to={`/game/${game.slug}`}>
        <img className=" " src={croppedUrl(game.background_image)} alt="" />
        <div className="flex px-3 justify-between items-center">
          <PlatIcons game={game} />
          <CriticScore game={game} />
        </div>
        <div>
          <div
            className="flex  my-2 font-bold 
          text-[30px] dark:text-white text-center justify-center"
          >
            {game.name}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Gcards;
