import React, { useState } from "react";
import "./mypost.css";
const MyPost = ({ contenti }) => {
  const [updateBtn, setUpdateBtn] = useState(false);
  const onHandleUpdateBtn = () => {
    setUpdateBtn(true);
  };
  const Scrab = contenti;
  return (
    <div className="myPostBackground">
      <div className="myPostDetailContainer">
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
        <button className="updateBtn" onClick={onHandleUpdateBtn}>
          수정
        </button>
        <header className="myPostHeader"></header>
      </div>
    </div>
  );
};
export default MyPost;
