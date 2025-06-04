import React from "react";
import { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      //accesses the root html so yea
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div>
      <label className="md:flex hidden justify-center items-center cursor-pointer">
        <input
          type="checkbox"
          checked={dark}
          onChange={() => setDark(!dark)}
          className="hidden"
        />
        {/**  toggle switch */}
        <div
          className={`w-10 h-6 flex 
            items-center bg-gray-300 dark:bg-gray-600 
            rounded-full p-1 duration-300`}
        >
          <div
            className={` w-4 h-4 rounded-full
            shadow-md transform duration-300 ${
              dark ? "translate-x-4 bg-gray-800" : "bg-white"
            } `}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
