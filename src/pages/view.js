import React from "react";
import axios from "axios";
import "./view.css";
import PostPreview from "../components/postpreview";
import api from "../config/apiConfig";
const url = window.location.href;
const accessToken = localStorage.getItem("accesstoken");
//get 방식
api
  .get("/api/post/preview", {
    params: {
      url: url,
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
    console.error(error);
  });
const View = () => {
  return (
    <div className="viewBackground">
      <PostPreview />
    </div>
  );
};
export default View;
