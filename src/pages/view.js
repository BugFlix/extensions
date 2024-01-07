import React from "react";
import axios from "axios";
import "./view.css";
import PostPreview from "../components/postpreview";
const url = window.location.href;
//get 방식
axios
  .get("/api/post/preview", {
    params: {
      url: url,
    },
    headers: {
      "Content-Type": "application/json",
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
