import React from "react";
import usePlatform from "../hooks/usePlatform";

const PlatSelect = ({ selected, platSelected }) => {
  const { plats, err } = usePlatform();
  if (err) return null;
  return (
    <div>
      <select
        name="platform"
        onChange={(e) => {
          const selected = plats.find(
            (plat) => plat.id === parseInt(e.target.value)
          );
          platSelected(selected);
        }}
        className="
       bg-gray-100 shadow-lg dark:bg-slate-700  mx-4 w-auto text-center 
       dark:text-white  p-2 rounded-md text-[1.1rem]"
      >
        <option value="default">Platforms</option>
        {plats.map((plat) => (
          <option key={plat.id} value={plat.id}>
            {plat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlatSelect;
