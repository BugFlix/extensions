import React, { useEffect, useState } from "react";
import Mypostrpreview from "../components/mypostpreview";
import "./update.css";
import axios from "axios";
import api from "../config/apiConfig";
const Update = () => {
  const [dataMyPost, setDataMyPost] = useState();
  const accessToken = localStorage.getItem("accesstoken");
  const url = window.location.href;
  console.log(url);
  const encodeUrl = encodeURIComponent(url);
  console.log(encodeUrl);
  useEffect(() => {
    // const responseDat = {
    //   data: [
    //     {
    //       post_id: 2,
    //       nickname: "tkrhdrhkdduf",
    //       title: "next.js default.tsx, 인터셉팅 라우트",
    //       tags: ["next.js", "typescript"],
    //       like_count: 1,
    //       is_like: true,
    //       image_url:
    //         "https://velog.velcdn.com/images/tkrhdrhkdduf/post/ce17cd00-1ad0-4f83-89d4-fdadbcf640e3/image.gif",
    //       createdDate: "2024-01-16T00:51:43.85549",
    //       modifiedDate: "2024-01-16T00:51:43.85549",
    //     },
    //     {
    //       post_id: 3,
    //       nickname: "tkrhdrhkdduf",
    //       title: "Vue.js로 만드는 웹사이트",
    //       tags: ["vue.js", "web", "인터렉티브"],
    //       like_count: 5,
    //       is_like: true,
    //       image_url:
    //         "https://velog.velcdn.com/images/tkrhdrhkdduf/post/46a0c82e-b91c-4fa8-82dc-34c877b37c15/image.gif",
    //       createdDate: "2024-01-16T00:51:43.85549",
    //       modifiedDate: "2024-01-16T00:51:43.85549",
    //     },
    //     {
    //       post_id: 4,
    //       nickname: "tkrhdrhkdduf",
    //       title: "테스터 코드 작성하기",
    //       tags: ["springboot", "java", "backend"],
    //       like_count: 3,
    //       is_like: true,
    //       image_url:
    //         "https://velog.velcdn.com/images/tkrhdrhkdduf/post/76d413b5-9774-4947-9034-d939adb572f2/image.png",
    //       createdDate: "2024-01-16T00:51:43.85549",
    //       modifiedDate: "2024-01-16T00:51:43.85549",
    //     },
    //   ],
    // };
    // setDataMyPost(responseDat.data);
    api
      .get(`/api/v1/posts/mine?url=${encodeUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDataMyPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="updateBackground">
      {dataMyPost && <Mypostrpreview dataMyPost={dataMyPost} />}
    </div>
  );
};
export default Update;
