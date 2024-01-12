import React, { useState } from "react";
import "./mypost.css";
import Comment from "../components/comment";
const MyPost = ({ contenti }) => {
  const [updateBtn, setUpdateBtn] = useState(false);
  const tags = ["태그들", "태그2"];
  const onHandleSaveBtn = () => {
    console.log("저장");
  };
  const onHandleUpdateBtn = () => {
    setUpdateBtn(true);
  };
  const onHandleDeleteBtn = () => {
    alert("현재 포스트가 삭제되었습니다.");
  };
  const Scrab = contenti;
  return (
    <div className="myPostBackground">
      <div className="myPostDetailContainer">
        <h1 className="myPostTitle">타이틀</h1>
        <div className="myPostTagContainer">
          <span>
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </span>
        </div>

        <div className="myPostScrabBox">
          <div
            className="PostScrabBox"
            dangerouslySetInnerHTML={{ __html: Scrab }}
          ></div>
        </div>
        <div className="myPostDetailBox">
          <div id="myPostEditor" contentEditable={updateBtn}>
            hello
          </div>
        </div>

        <header className="myPostHeader">
          <button className="saveMemoBtn" onClick={onHandleSaveBtn}>
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
    </div>
  );
};
export default MyPost;
