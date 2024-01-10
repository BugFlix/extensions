import React, { useState, useRef } from "react";
import "./updatepreview.css";
import Collection2 from "../images/multiple.png";
import MyPost from "../pages/mypost";

const MyPostPreview = ({ contenti }) => {
  const collection1Ref = useRef();
  const collection2Ref = useRef();
  const [collection, selectCollection] = useState("collect1column");
  const [showMyPost, setShowMyPost] = useState(false);

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
  const onHandleMyPost = () => {
    setShowMyPost(!showMyPost);
  };

  return (
    <div className="MyPostBackground">
      <div className="myPostContainer">
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
          <div
            className="myPreviewBox"
            style={getPreviewBoxStyle()}
            onClick={onHandleMyPost}
          >
            <img
              className="myBox"
              src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/ce17cd00-1ad0-4f83-89d4-fdadbcf640e3/image.gif"
              style={getImageBox()}
            ></img>
            <h3 style={getTitleBox()}>next.js default.tsx, 인터셉팅 라우트</h3>
            <button
              className="recommendIcon"
              style={getRecommendBox()}
            ></button>
          </div>
          <div className="myPreviewBox" style={getPreviewBoxStyle()}>
            <img
              className="myBox"
              src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/46a0c82e-b91c-4fa8-82dc-34c877b37c15/image.gif"
              style={getImageBox()}
            ></img>
            <h3 style={getTitleBox()}>Vue.js로 만드는 웹사이트</h3>
            <button
              className="recommendIcon"
              style={getRecommendBox()}
            ></button>
          </div>
          <div className="myPreviewBox" style={getPreviewBoxStyle()}>
            <img
              className="myBox"
              src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/76d413b5-9774-4947-9034-d939adb572f2/image.png"
              style={getImageBox()}
            ></img>
            <h3 style={getTitleBox()}>테스터 코드 작성하기</h3>
            <button
              className="recommendIcon"
              style={getRecommendBox()}
            ></button>
          </div>
          <div className="myPreviewBox" style={getPreviewBoxStyle()}>
            <img
              className="myBox"
              src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/298a37f5-e225-409d-85e0-bb677a0cba24/image.jpg"
              style={getImageBox()}
            ></img>
            <h3 style={getTitleBox()}>Next.js 14</h3>
            <button
              className="recommendIcon"
              style={getRecommendBox()}
            ></button>
          </div>
        </div>
      </div>
      {showMyPost && <MyPost contenti={contenti} />}
    </div>
  );
};

export default MyPostPreview;
