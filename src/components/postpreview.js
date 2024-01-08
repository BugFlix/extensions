import React, { useState, useRef } from "react";
import "./postpreview.css";
import Collection2 from "../images/multiple.png";

const PostPreview = () => {
  const collection1Ref = useRef();
  const collection2Ref = useRef();
  const [collection, selectCollection] = useState("collect1column");

  const handleCollection = (prev) => {
    selectCollection((prevCollection) =>
      prevCollection === "collect1column" ? "collect2coloumn" : "collect1column"
    );
  };
  const getPreviewBoxStyle = () => {
    if (collection === "collect2coloumn") {
      return {
        width: "125px",
        height: "125px",
        marginLeft: "15px",
      };
    }
    return {};
  };
  const getRecommendBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "92.5px",
        marginLeft: "92.5px",
        width: "19px",
        height: "19px",
      };
    }
  };
  const getImageBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "-63px",
        width: "122px",
        height: "60px",
      };
    }
  };
  const getTitleBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "50px",
        fontSize: "7.5px",
      };
    }
  };

  return (
    <div className="postContainer">
      <div className="collectionMenu">
        <div
          className="collection1img"
          ref={collection1Ref}
          onClick={() => handleCollection(collection1Ref)}
        ></div>
        <img
          className="collection2img"
          ref={collection2Ref}
          onClick={() => handleCollection(collection2Ref)}
          src={Collection2}
          alt="Collection2"
        ></img>
      </div>
      <div className={collection}>
        <div className="previewBox" style={getPreviewBoxStyle()}>
          <img
            className="hello"
            src="https://velog.velcdn.com/images/hmmhmmhm/post/f6cb929e-4552-4955-83ee-5d861225bc45/image.gif"
            style={getImageBox()}
          ></img>
          <h3 style={getTitleBox()}>하루 만에 혼자 3D 로 신년카드 웹앱을?</h3>
          <button className="recommendIcon" style={getRecommendBox()}></button>
        </div>
        <div className="previewBox" style={getPreviewBoxStyle()}>
          <img
            className="hello"
            src="https://velog.velcdn.com/images/naro-kim/post/5765f485-9469-4a03-a0cf-2da5cf5c1ba5/image.gif"
            style={getImageBox()}
          ></img>
          <h3 style={getTitleBox()}>인터랙티브 3D web으로 만든 눈내리는</h3>
          <button className="recommendIcon" style={getRecommendBox()}></button>
        </div>
        <div className="previewBox" style={getPreviewBoxStyle()}>
          <img
            className="hello"
            src="https://miro.medium.com/v2/resize:fit:1300/format:webp/1*oAwGDARfOzWoZnq1Rhingg.png"
            style={getImageBox()}
          ></img>
          <h3 style={getTitleBox()}>[ Next js ] Next js 란?</h3>
          <button className="recommendIcon" style={getRecommendBox()}></button>
        </div>
        <div className="previewBox" style={getPreviewBoxStyle()}>
          <img
            className="hello"
            src="https://velog.velcdn.com/images/chozzaman/post/d50aa4d8-13f2-470b-917a-19db5e3c6681/image.png"
            style={getImageBox()}
          ></img>
          <h3 style={getTitleBox()}>TIL 231108 - To-do List 회고</h3>
          <button className="recommendIcon" style={getRecommendBox()}></button>
        </div>
        <div className="previewBox" style={getPreviewBoxStyle()}>
          <img
            className="hello"
            src="https://velog.velcdn.com/images/ppparkta/post/723eef2a-c289-4ec9-ba7e-84625e32498e/image.webp"
            style={getImageBox()}
          ></img>
          <h3 style={getTitleBox()}>2023년 하반기 회고</h3>
          <button className="recommendIcon" style={getRecommendBox()}></button>
        </div>
        <div className="previewBox" style={getPreviewBoxStyle()}>
          <img
            className="hello"
            src="https://velog.velcdn.com/images/s0zzang/post/b873f266-b566-43d6-8a72-dfcc99f23b11/image.png"
            style={getImageBox()}
          ></img>
          <h3 style={getTitleBox()}>[프론트엔드] 웹 접근성 정복하기</h3>
          <button className="recommendIcon" style={getRecommendBox()}></button>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
