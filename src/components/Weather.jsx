import React from "react";
import { CiSun } from "react-icons/ci";

const Weather = () => {
  return (
    <div className="p-6 h-[30rem]">
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#696eff] to-[#f8acff] rounded-lg h-full p-5">
        <CiSun className="text-red-500 text-9xl" />
        <h1 className="text-6xl font-semibold">26°</h1>
        <p className="text-4xl mt-2">Howrah</p>
      </div>
    </div>
  );
};

export default Weather;
