import React from "react";
import usePlatform from "../hooks/usePlatform";
const PlatSelect = () => {
  const { plats, err } = usePlatform();
  if (err) return null;
  return (
    <div>
      <select
        name="platform"
        className="
       bg-gray-100 shadow-lg dark:bg-slate-700 mt-14 mx-4 w-auto text-center 
       dark:text-white font-mono p-2 rounded-md text-[1.1rem]"
      >
        <option value="default">Platforms</option>
        {plats.map((plat) => (
          <option key={plat.id}>{plat.name}</option>
        ))}
      </select>
    </div>
  );
};

export default PlatSelect;
