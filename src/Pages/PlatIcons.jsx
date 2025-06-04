import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
const PlatIcons = ({ game }) => {
  //slug equivalent of id of image?
  const platformIcons = {
    PC: <FaWindows />,
    PlayStation: <FaPlaystation />,
    Xbox: <FaXbox />,
    Nintendo: <SiNintendo />,
    Mac: <FaApple />,
    Linux: <FaLinux />,
    Android: <FaAndroid />,
    iOS: <MdPhoneIphone />,
    Web: <BsGlobe />,
  };

  return (
    <div
      className="text-center dark:text-gray-400 text-gray-700 flex
    flex-wrap justify-center py-4"
    >
      {game.parent_platforms.map(({ platform }) => (
        <div key={platform.id} className="p-1 text-[1.3rem]">
          {platformIcons[platform.name]}
        </div>
      ))}
    </div>
  );
};

export default PlatIcons;
