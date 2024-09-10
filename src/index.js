import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating color={"blue"} onSettingRating={setMovieRating} />
      <p>This movie has give {movieRating} Star Rating</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <Test />
    <StarRating
      maxRating={3}
      messages={["Bad", "Good", "Amazing"]}
      color={"red"}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
