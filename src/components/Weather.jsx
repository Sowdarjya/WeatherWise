import React from "react";
import { CiSun } from "react-icons/ci";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

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

  return (
    <div className="p-6 h-auto">
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#696eff] to-[#f8acff] rounded-lg h-full p-5">
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
              <Icon className="mr-1 text-2xl" />{" "}
              <span className="text-xl"> {value} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
