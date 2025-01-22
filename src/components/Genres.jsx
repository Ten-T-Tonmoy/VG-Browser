import React from "react";
import useGenre from "../hooks/useGenre";
import croppedUrl from "../services/imageUrl";

const Genres = () => {
  const { genres, err } = useGenre();

  return (
    <div className="mt-14 ease-in-out duration-200">
      {genres.map((genre) => (
        <div
          className="flex dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md cursor-pointer m-1 p-1"
          key={genre.id}
        >
          <img
            className="w-12 rounded-full h-12"
            src={croppedUrl(genre.image_background)}
            alt=""
          />
          <div className="dark:text-white font-mono relative top-4 mx-2">
            {genre.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Genres;
