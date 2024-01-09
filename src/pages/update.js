import React from "react";
import Mypostrpreview from "../components/mypostpreview";
import "./update.css";
import axios from "axios";
const Update = () => {
  axios
    .get("//api/post/mine", {
      params: {
        url: window.location.href,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="updateBackground">
      <Mypostrpreview />
    </div>
  );
};
export default Update;
