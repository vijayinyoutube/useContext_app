import React, { useContext } from "react";
import useHomePageService from "../Service/Home.service";
import { HomeContext } from "../Context/Home.context";

const HomeView = () => {
  const { first, setfirst } = useContext(HomeContext);

  const handleIncrement = () => {
    setfirst((first: number) => first + 1);
  };

  return (
    <div>
      HomeView {first}
      <div>
        <button onClick={handleIncrement}>Click</button>
      </div>
    </div>
  );
};

export default HomeView;
