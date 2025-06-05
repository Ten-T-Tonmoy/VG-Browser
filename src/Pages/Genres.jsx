import React, { useState } from "react";
import useGenre from "../hooks/useGenre";
import croppedUrl from "../services/imageUrl";

const Genres = ({ gen, handleGenre }) => {
  const { genres, err } = useGenre();

  //adjust pb on necessary
  return (
    <div
      className="text-[.9rem] ease-in-out dark:text-gray-300 duration-200 h-[100vh] overflow-y-auto
     hidden lg:block shadow-lg dark:shadow-gray-200/15 no-scrollbar
      border-r mr-2 dark:border-gray-400/20 border-gray-500/10 pb-20 "
    >
      {genres.map((genre) => (
        <div
          onClick={() => handleGenre(genre.name)}
          className="flex items-center gap-2 border dark:border-gray-400/20 border-gray-500/10
           dark:hover:bg-gray-700 hover:bg-gray-300 rounded-sm 
           cursor-pointer m-1 "
          key={genre.id}
        >
          <img
            className="w-9 rounded-sm h-9"
            src={croppedUrl(genre.image_background)}
            alt=""
          />
          <div className="px-2">{genre.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Genres;
