import React from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="h-full">
      <Search />
      <Weather />
    </div>
  );
};

export default App;
