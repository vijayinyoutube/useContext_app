import React, { useContext } from "react";
import { HomeContext } from "../Home";

const CompB = () => {
  const { data } = useContext(HomeContext);

  return (
    <div>
      CompB
      <div>{data}</div>
    </div>
  );
};

export default CompB;
