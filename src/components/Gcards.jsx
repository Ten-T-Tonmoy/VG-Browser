import React from "react";

const Gcards = ({ game }) => {
  return (
    <div className="bg-white rounded-md ">
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
      </div>
    </div>
  );
};

export default Gcards;
