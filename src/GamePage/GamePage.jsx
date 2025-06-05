import React from "react";
import useElement from "../hooks/useElement";
import Images from "./Images";
import croppedUrl from "../services/imageUrl";

//icons
import { IoGameController } from "react-icons/io5";
import PlatIcons from "../Pages/PlatIcons";
import { LiaStarSolid } from "react-icons/lia";

import { FaPoop } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BsStars } from "react-icons/bs";

import { BsGlobe } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa6";
import { SiMetacritic } from "react-icons/si";

import { HiBuildingOffice2 } from "react-icons/hi2";

const GamePage = () => {
  const { loading, game, error } = useElement();
  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className={`dark:text-gray-200 text-gray-900  overflow-hidden`}>
      <div className=" flex px-2 flex-wrap gap-2 justify-center items-center md:justify-start md:pl-5 text-[1.7rem] pb-6 font-black">
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
      <div className="flex  gap-4 items-center justify-between">
        <h1 className="font-black">Available Platforms: </h1>
        <PlatIcons game={game} />
      </div>
      {/** genre section is tf here  */}
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="font-black">Genres: </h1>

        <div className="flex flex-wrap">
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

      {/** ratings*/}

      <div
        className=" flex justify-between items-center 
       font-black"
      >
        <h1 className="font-black">Rating :</h1>
        <div className="flex gap-2 items-center">
          <LiaStarSolid className="dark:text-gray-400 text-gray-700  text-[1.4rem]" />
          {game.rating}
          <p className=" font-[400] text-green-500 text-[.8rem]">
            ({game.ratings_count} ratings)
          </p>
        </div>
      </div>

      {/**ratings title,percentage,count? BsStars,AiFillLike,AiFillDislike ,FaPoop*/}
      <div className="w-full grid text-gray-200  grid-cols-2 gap-2 py-2">
        <div className="bg-green-500 p-2 rounded-md w-[90%] justify-self-center items-center">
          <h1 className="text-center">Recommended</h1>
          <div className="flex justify-between px-2 items-center ">
            <AiFillLike className="text-[1.5rem]" />
            {game.ratings?.find((rat) => rat.title === "recommended")?.percent}%
          </div>
        </div>

        <div className="bg-yellow-500 p-2 rounded-md w-[90%] justify-self-center items-center">
          <h1 className="text-center">Exceptional</h1>
          <div className="flex justify-between px-2 items-center ">
            <BsStars className="text-[1.5rem]" />
            {game.ratings?.find((rat) => rat.title === "exceptional")?.percent}%
          </div>
        </div>

        <div className="bg-gray-600  p-2 rounded-md w-[90%] justify-self-center items-center">
          <h1 className="text-center">Total Shit</h1>
          <div className="flex justify-between px-2 items-center ">
            <FaPoop className="text-[1.5rem]" />
            {game.ratings?.find((rat) => rat.title === "meh")?.percent}%
          </div>
        </div>
        <div className="bg-red-500 p-2 rounded-md w-[90%] justify-self-center items-center">
          <h1 className="text-center">Avoid This</h1>
          <div className="flex justify-between px-2 items-center ">
            <AiFillDislike className="text-[1.5rem]" />
            {game.ratings?.find((rat) => rat.title === "meh")?.percent}%
          </div>
        </div>
      </div>

      {/***publishers section starts from here */}

      {/**Tags======================== */}
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="font-black">Tags: </h1>

        <div className="flex text-[.8rem] md:flex-wrap overflow-y-auto no-scrollbar ">
          {game.tags.map((genre) => (
            <div
              className="flex items-center flex-shrink-0 gap-2 border dark:border-gray-400/20 border-gray-500/10
          dark:bg-gray-700 bg-gray-300 rounded-full 
          cursor-pointer m-1 "
              key={genre.id}
            >
              <img
                className="w-10 rounded-full h-10"
                src={croppedUrl(genre.image_background)}
                alt=""
              />
              <div className="pr-4">{genre.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Right = ({ game }) => {
  return (
    <div className="h-full px-[4%] md:px-[2.5%] py-4">
      <div className="flex"></div>
      <h1 className="font-black py-2">Decription :</h1>
      <p
        className="text-[.9rem] dark:text-gray-400
      text-gray-700 text-justify "
      >
        {game.description_raw}
      </p>

      <div className="font-black py-2 ">This Game is Developed by :</div>
      <div className="font-black py-2 flex justify-center items-center gap-2 text-[1.8rem]">
        <HiBuildingOffice2 />
        {game.developers[0].name}
      </div>
      <div className="flex justify-between">
        <div className="font-black py-2 ">Useful Links :</div>
        <div className="font-black py-2 flex justify-center items-center gap-4 text-[1.8rem]">
          <a href={game.reddit_url}>
            <FaRedditAlien className="text-red-600 cursor-pointer" />
          </a>
          <a href={game.website}>
            <BsGlobe className="text-cyan-600 cursor-pointer" />
          </a>
          <a href={game.metacritic_url}>
            <SiMetacritic className="text-yellow-600  cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
