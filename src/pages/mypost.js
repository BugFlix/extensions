import React, { useState, useEffect } from "react";
import "./mypost.css";
import Comment from "../components/comment";
import api from "../config/apiConfig";
const MyPost = ({ dataMyPostDetail }) => {
  const accessToken = localStorage.getItem("accesstoken");
  const [updateBtn, setUpdateBtn] = useState(false);
  useEffect(() => {
    document.querySelector(".but").style.visibility = "hidden";
  }, []);
  const onHandleSaveBtn = async (post_id, tag) => {
    console.log("저장");
    const title = document.querySelector(".myPostTitle").innerHTML;
    const tags = tag;
    const scrab = document.querySelector(".PostScrabBox").innerHTML;
    const memo = document.getElementById("myPostEditor").innerHTML;

    const requestData = {
      data: [
        {
          title: title,
          tags: tags,
          content: scrab,
          memo: memo,
        },
      ],
    };
    console.log(requestData);

    // try {
    //   const response = await api.put("/api/post", requestData, {
    //     params: {
    //       postId: post_id,
    //     },
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const onHandleUpdateBtn = () => {
    setUpdateBtn(true);
  };
  const onHandleDeleteBtn = () => {
    alert("현재 포스트가 삭제되었습니다.");
  };
  return (
    <div className="myPostBackground">
      {dataMyPostDetail.map((value, index) => (
        <div key={index} className="myPostDetailContainer">
          <h1 className="myPostTitle">{value.title}</h1>
          <div className="myPostTagContainer">
            <span>
              {value.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </span>
          </div>

          <div className="myPostScrabBox">
            <div
              className="PostScrabBox"
              dangerouslySetInnerHTML={{ __html: value.content }}
            ></div>
          </div>
          <div className="myPostDetailBox">
            <div
              id="myPostEditor"
              contentEditable={updateBtn}
              dangerouslySetInnerHTML={{ __html: value.memo }}
            ></div>
          </div>

          <header className="myPostHeader">
            <button
              className="saveMemoBtn"
              onClick={() => onHandleSaveBtn(value.post_id, value.tags)}
            >
              저장
            </button>
            <button className="updateBtn" onClick={onHandleUpdateBtn}>
              수정
            </button>
            <button className="deleteBtn" onClick={onHandleDeleteBtn}>
              삭제
            </button>
            <Comment />
          </header>
        </div>
      ))}
    </div>
  );
};
export default MyPost;
