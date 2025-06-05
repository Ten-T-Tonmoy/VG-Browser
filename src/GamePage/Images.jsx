import React from "react";

const Images = ({ game }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4">
      <img
        src={game.background_image}
        alt=""
        className="h-full justify-self-center rounded-md w-[93%] md:w-[95%]"
      />
      <img
        src={game.background_image_additional}
        alt=""
        className="h-full justify-self-center  rounded-md w-[93%] md:w-[95%]"
      />
    </div>
  );
};

export default Images;
