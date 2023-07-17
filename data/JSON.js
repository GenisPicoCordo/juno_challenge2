import { AiFillHome } from "react-icons/ai";
import { BiSolidPlanet } from "react-icons/bi";
import { GiBattleTank } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { GiFilmSpool } from "react-icons/gi";
import { GiSpaceSuit } from "react-icons/gi";
import { SiStarship } from "react-icons/si";

export const Data = {
  navigationData: [
    {
      icon: <AiFillHome />,
      name: "home",
    },
    {
      icon: <BiSolidPlanet />,
      name: "planets",
    },
    {
      icon: <SiStarship />,
      name: "starShips",
    },
    {
      icon: <GiBattleTank />,
      name: "vehicles",
    },
    {
      icon: <IoIosPeople />,
      name: "people",
    },
    {
      icon: <GiFilmSpool />,
      name: "films",
    },
    {
      icon: <GiSpaceSuit />,
      name: "species",
    },
  ],
};
