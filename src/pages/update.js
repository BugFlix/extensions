import React from "react";
import Mypostrpreview from "../components/mypostpreview";
import "./update.css";
import axios from "axios";
import api from "../config/apiConfig";
const Update = ({ contenti }) => {
  const accessToken = localStorage.getItem("accesstoken");
  api
    .get("//api/post/mine", {
      params: {
        url: window.location.href,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
      <Mypostrpreview contenti={contenti} />
    </div>
  );
};
export default Update;
