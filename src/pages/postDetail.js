import React, { useState } from "react";
import "./postDetail.css";
import Comment from "../components/comment";
const PostDetail = ({ contenti }) => {
  const Scrab = contenti;
  const tags = ["태그들", "태그2"];
  return (
    <div className="postDetailBackground">
      <div className="postDetailContainer">
        <h1 className="postTitle">타이틀</h1>
        <div className="postTagContainer">
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
        <div className="postDetailBox">
          <div id="postEditor">hello</div>
        </div>

        <header className="postHeader">
          <Comment />
        </header>
      </div>
    </div>
  );
};
export default PostDetail;
