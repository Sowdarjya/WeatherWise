import React, { useState } from "react";
import {
  WiCloudy,
  WiRain,
  WiSnow,
  WiDaySunny,
  WiThunderstorm,
} from "react-icons/wi";
import { FaThermometerEmpty, FaWind, FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import useFetch from "../useFetch";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Mumbai");

  let data = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=cfc392f4ac723d6721c432e106d8b0d9&units=metric`
  );

  const weatherIconMap = {
    Clear: WiDaySunny,
    Clouds: WiCloudy,
    Rain: WiRain,
    Snow: WiSnow,
    Thunderstorm: WiThunderstorm,
  };

  const otherInfo = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      value: data ? `${Math.floor(data.main.temp)}°C` : "Loading...",
    },
    {
      id: 2,
      Icon: FaWind,
      value: data ? `${data.wind.speed}km/h` : "Loading...",
    },
    {
      id: 3,
      Icon: WiHumidity,
      value: data ? `${data.main.humidity}%` : "Loading...",
    },
  ];

  const weatherDescription = data ? data.weather[0].main : "Loading...";
  const WeatherIcon = weatherIconMap[weatherDescription] || WiCloudy;

  const handleSearch = () => {
    setQuery(search);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 h-auto w-2/5">
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#696eff] to-[#f8acff] rounded-lg h-full py-3 px-1">
        <div className="w-full flex items-center justify-center mb-3">
          <input
            type="text"
            value={search}
            placeholder="City name"
            className="w-3/4 p-2 text-sm bg-slate-200 rounded-md text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-lime-400 p-2.5 rounded-md ml-1 text-xs"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
        <h1 className="text-4xl font-bold mb-2">WeatherWise</h1>
        <span className="text-sm opacity-50 text-gray-950 font-medium">
          {weatherDescription}
        </span>
        <WeatherIcon className=" text-9xl" />
        <h1 className="text-6xl font-semibold">
          {Math.floor(data.main.temp)}°C
        </h1>
        <h3 className="text-4xl mt-2">
          {data.name}, {data.sys.country}
        </h3>
        <div className="flex justify-between items-center">
          {otherInfo.map(({ id, Icon, value }) => (
            <div key={id} className="flex items-center p-6 w-1/2">
              <Icon className="text-2xl" />
              <span className="text-xl ml-1"> {value} </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-around w-3/4">
          <p className="font-medium text-lg">
            {" "}
            Min: {`${Math.floor(data.main.temp_min)}`}°C{" "}
          </p>
          <p className="font-medium text-lg">
            {" "}
            Max: {`${Math.ceil(data.main.temp_max)}`}°C{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
