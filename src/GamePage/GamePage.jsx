import React from "react";
import useElement from "../hooks/useElement";
import Images from "./Images";
import croppedUrl from "../services/imageUrl";

//icons
import { IoGameController } from "react-icons/io5";
import PlatIcons from "../Pages/PlatIcons";

const GamePage = () => {
  const { loading, game, error } = useElement();
  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className={`dark:text-gray-200 text-gray-900  overflow-hidden`}>
      <div className=" flex gap-2 justify-center items-center md:justify-start md:pl-5 text-[1.7rem] pb-6 font-black">
        <IoGameController className="" />
        {game.name}
      </div>
      <Images game={game} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4">
        <Left game={game} />
        <Right game={game} />
      </div>
    </div>
  );
};

export default GamePage;

/**
 * background-image
 * background_image_additional
 * dominant_color
 * saturated_color
 * esrb_rating
 * description_raw
 * metacritic
 * name
 * publishers
 * platforms =>platform array
 * reddit_url
 * website
 * twitch_count
 * genres => array of genres having id,name,slug
 * 
 * added_by_status => beaten,owned,dropped
 * 
 * alternative_names =>just string array
 * developers
 * id,name,slug,image_background
 * 
 * esrb id,name,slug
 * 
 * publishers
 * name slug image_background
 * 
 * 
 * rating
 * ratings_count
 * rating_top
 * ratings=> count ,percent ,title
 */

const Left = ({ game }) => {
  return (
    <div className="h-full px-[4%] md:px-[2%] py-4 ">
      <div className="flex gap-4 items-center justify-between">
        <h1 className="font-black">Available Platforms: </h1>
        <PlatIcons game={game} />
      </div>
      {/** genre section is tf here  */}
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="font-black">Genres: </h1>

        <div className="flex">
          {game.genres.map((genre) => (
            <div
              className="flex items-center gap-2 border dark:border-gray-400/20 border-gray-500/10
          dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md 
          cursor-pointer m-1 "
              key={genre.id}
            >
              <img
                className="w-10 rounded-md h-10"
                src={croppedUrl(genre.image_background)}
                alt=""
              />
              <div className="px-2">{genre.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/** */}
    </div>
  );
};


const Right = ({ game }) => {
  return (
    <div className="h-full px-[4%] md:px-[5%] py-4">
      <div className="flex"></div>
      <h1 className="font-black py-2">Decription :</h1>
      <p
        className="text-[.9rem] dark:text-gray-400
      text-gray-700 text-justify "
      >
        {game.description_raw}
      </p>
    </div>
  );
};
