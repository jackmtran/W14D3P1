import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");

  setTheme();

  return (
    <div className="theme">
      <h1>UseState Component</h1>
    </div>
  );
};

export default UseState;
