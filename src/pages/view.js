import React, { useEffect, useState } from "react";
import axios from "axios";
import "./view.css";
import PostPreview from "../components/postpreview";
import api from "../config/apiConfig";

const View = () => {
  const url = window.location.href;
  const accessToken = localStorage.getItem("accesstoken");
  const [dataPost, setDataPost] = useState(null);
  //get 방식

  useEffect(() => {
    const responseDat = {
      data: [
        {
          post_id: 2,
          title: "하루 만에 혼자 3D 로 신년카드 웹앱을?",
          tags: ["카드", "디자인", "3D"],
          like_count: 1,
          is_like: true,
          image_url:
            "https://velog.velcdn.com/images/hmmhmmhm/post/f6cb929e-4552-4955-83ee-5d861225bc45/image.gif",
        },
        {
          post_id: 3,
          title: "인터랙티브 3D web으로 만든 눈내리는",
          tags: ["3D", "web", "인터렉티브"],
          like_count: 5,
          is_like: true,
          image_url:
            "https://velog.velcdn.com/images/naro-kim/post/5765f485-9469-4a03-a0cf-2da5cf5c1ba5/image.gif",
        },
        {
          post_id: 4,
          title: "Next js ] Next js 란?",
          tags: ["next.js", "web", "프론트"],
          like_count: 3,
          is_like: true,
          image_url:
            "https://miro.medium.com/v2/resize:fit:1300/format:webp/1*oAwGDARfOzWoZnq1Rhingg.png",
        },
      ],
    };
    setDataPost(responseDat.data);
    // api
    //   .get("/api/post/preview", {
    //     params: {
    //       url: url,
    //     },
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     setDataPost(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <div className="viewBackground">
      {dataPost && <PostPreview dataPost={dataPost} />}
    </div>
  );
};
export default View;
