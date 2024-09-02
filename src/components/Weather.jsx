import React from "react";
import { CiSun } from "react-icons/ci";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Weather = () => {
  const otherInfo = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      value: "27°",
    },
    {
      id: 2,
      Icon: FaWind,
      value: "20km/h",
    },
    {
      id: 1,
      Icon: WiHumidity,
      value: "30%",
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="p-6 h-auto">
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#696eff] to-[#f8acff] rounded-lg h-full py-3 px-1">
        <div className="w-full flex items-center justify-center mb-3">
          <input
            type="text"
            value={search}
            placeholder="City name"
            className="w-3/4 p-2 text-sm bg-slate-200 rounded-md text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-lime-400 p-2.5 rounded-md ml-1 text-xs">
            <FaSearch />
          </button>
        </div>
        <h1 className="text-4xl font-bold mb-2">WeatherWise</h1>
        <span className="text-sm opacity-50 text-gray-950 font-medium">
          clear
        </span>
        <CiSun className="text-red-500 text-9xl" />
        <h1 className="text-6xl font-semibold">26°</h1>
        <h3 className="text-4xl mt-2">Howrah</h3>
        <div className="flex">
          {otherInfo.map(({ id, Icon, value }) => (
            <div
              key={id}
              id={id}
              className="flex items-center justify-around p-3 m-6"
            >
              <Icon className=" text-2xl" />
              <span className="text-xl ml-1"> {value} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
