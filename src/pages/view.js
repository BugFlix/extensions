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
          nickname: "하민",
          title: "하루 만에 혼자 3D 로 신년카드 웹앱을?",
          tags: [
            {
              createdDate: "2024-01-16T00:51:43.8662",
              modifiedDate: "2024-01-16T00:51:43.8662",
              tagContent: "카드",
            },
            {
              createdDate: "2024-01-16T00:51:43.869684",
              modifiedDate: "2024-01-16T00:51:43.869684",
              tagContent: "디자인",
            },
            {
              createdDate: "2024-01-16T00:51:43.869684",
              modifiedDate: "2024-01-16T00:51:43.869684",
              tagContent: "3d",
            },
          ],
          like_count: 1,
          is_like: true,
          image_url:
            "https://velog.velcdn.com/images/hmmhmmhm/post/f6cb929e-4552-4955-83ee-5d861225bc45/image.gif",
          createdDate: "2024-01-16T00:51:43.85549",
          modifiedDate: "2024-01-16T00:51:43.85549",
        },
        {
          post_id: 3,
          nickname: "김영은",
          title: "인터랙티브 3D web으로 만든 눈내리는",
          tags: [
            {
              createdDate: "2024-01-16T00:51:43.8662",
              modifiedDate: "2024-01-16T00:51:43.8662",
              tagContent: "3D",
            },
            {
              createdDate: "2024-01-16T00:51:43.869684",
              modifiedDate: "2024-01-16T00:51:43.869684",
              tagContent: "web",
            },
            {
              createdDate: "2024-01-16T00:51:43.869684",
              modifiedDate: "2024-01-16T00:51:43.869684",
              tagContent: "인터렉티브",
            },
          ],
          like_count: 5,
          is_like: true,
          image_url:
            "https://velog.velcdn.com/images/naro-kim/post/5765f485-9469-4a03-a0cf-2da5cf5c1ba5/image.gif",
          createdDate: "2024-01-16T00:51:43.85549",
          modifiedDate: "2024-01-16T00:51:43.85549",
        },
        {
          post_id: 4,
          nickname: "한대휘",
          title: "Next js ] Next js 란?",
          tags: [
            {
              createdDate: "2024-01-16T00:51:43.8662",
              modifiedDate: "2024-01-16T00:51:43.8662",
              tagContent: "next.js",
            },
            {
              createdDate: "2024-01-16T00:51:43.869684",
              modifiedDate: "2024-01-16T00:51:43.869684",
              tagContent: "web",
            },
            {
              createdDate: "2024-01-16T00:51:43.869684",
              modifiedDate: "2024-01-16T00:51:43.869684",
              tagContent: "프론트엔드",
            },
          ],
          like_count: 3,
          is_like: true,
          image_url:
            "https://miro.medium.com/v2/resize:fit:1300/format:webp/1*oAwGDARfOzWoZnq1Rhingg.png",
          createdDate: "2024-01-16T00:51:43.85549",
          modifiedDate: "2024-01-16T00:51:43.85549",
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
