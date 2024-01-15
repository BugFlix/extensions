import React, { useEffect, useState } from "react";
import "./postDetail.css";
import Comment from "../components/comment";
import unlikeImg from "../images/unlikestar.png";
import likeImg from "../images/likestar.png";
const PostDetail = ({ dataPostDetail }) => {
  const like = dataPostDetail[0].like_count;
  const btn = dataPostDetail[0].is_like;
  const [img, setImg] = useState(unlikeImg);
  const [likeCount, setLikeCount] = useState(like);
  const [btnPressed, setBtnPressed] = useState(btn);
  const onHandleLikeButton = async () => {
    setLikeCount((prev) => {
      if (!btnPressed) {
        setImg(likeImg);
        setBtnPressed(true);
        return prev + 1;
      } else {
        setImg(unlikeImg);
        setBtnPressed(false);
        return prev - 1;
      }
    });
    try {
    } catch (error) {
      console.log(error);
    }
  };
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
          <button className="likeBtn" onClick={onHandleLikeButton}>
            <img src={img}></img>
          </button>
          <span className="likeValue">{likeCount}</span>
          <header className="postHeader">
            <Comment />
          </header>
        </div>
      ))}
    </div>
  );
};
export default PostDetail;
