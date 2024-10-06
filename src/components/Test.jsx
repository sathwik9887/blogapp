import React, { useContext } from "react";
import { LoginContext } from "../App";

const Test = () => {
  const ab = useContext(LoginContext);
  console.log(ab);
  return <div className="text-4xl">Test</div>;
};

export default Test;
