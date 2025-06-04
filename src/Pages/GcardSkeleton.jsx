import React from "react";

const GcardSkeleton = () => {
  return (
    <div
      className=" w-full h-[400px] bg-gray-100 cursor-pointer
  hover:bg-gray-300 ease-in-out duration-200 dark:hover:bg-gray-700  dark:bg-gray-800 shadow-lg
rounded-md lg:max-w-[320px] "
    >
      <img className="rounded-md " alt="" />
      <div className="flex mx-3 justify-between">Scores and icons </div>
      <div>
        <div
          className="flex  my-2 font-bold 
    text-[30px] dark:text-white text-center justify-center"
        >
          Game Name
        </div>
      </div>
    </div>
  );
};

export default GcardSkeleton;
