import React, { useEffect, useState } from "react";
import "./postDetail.css";
import Comment from "../components/comment";
const PostDetail = ({ dataPostDetail }) => {
  useEffect(() => {
    document.querySelector(".but").style.visibility = "hidden";
  }, []);
  return (
    <div className="postDetailBackground">
      {dataPostDetail.map((value, index) => (
        <div key={index} className="postDetailContainer">
          <h1 className="postTitle">{value.title}</h1>
          <div className="postTagContainer">
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
          <div className="postDetailBox">
            <div
              id="postEditor"
              dangerouslySetInnerHTML={{ __html: value.memo }}
            ></div>
          </div>

          <header className="postHeader">
            <Comment />
          </header>
        </div>
      ))}
    </div>
  );
};
export default PostDetail;
