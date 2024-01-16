import React, { useState, useRef } from "react";
import useDragDetect from "../hooks/useDragDetect";
import useSelectionChange from "../hooks/useSelectionChange";
import useStyledContent from "../hooks/useStyledContent";
import Scrab from "../pages/scrab";
import View from "../pages/view";
import Post from "./post";
import Tag from "./tag";
import Title from "./title";
import axios from "axios";
import Update from "../pages/update";
import api from "../config/apiConfig";

const Menu = () => {
  const accessToken = localStorage.getItem("accesstoken");
  const [selectedHtml, setSelectedHtml] = useState("");
  const [computedStyles, setComputedStyles] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const letters = ["E", "V", "U"]; // Add more letters if needed
  const [selectedLetter, setSelectedLetter] = useState("E");
  const [selectedComponent, setSelectedComponent] = useState("E");
  const toggleSelected = (letter) => {
    setSelectedLetter((prevSelectedLetter) =>
      prevSelectedLetter === letter ? null : letter
    );
    setSelectedComponent((prevSelectedComponent) =>
      prevSelectedComponent === letter ? null : letter
    );
  };

  const getCircleStyle = (letter) => ({
    backgroundColor: selectedLetter === letter ? "#AAB3FF" : "",
    color: selectedLetter === letter ? "#ffffff" : "",
    height: "100%",
    width: "21px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const handleSelectionChange = useSelectionChange(
    setSelectedHtml,
    setComputedStyles,
    isDragging
  );

  useDragDetect(handleSelectionChange, setIsDragging);

  const getStyledContent = useStyledContent(computedStyles, selectedHtml);
  const titleRef = useRef();
  const tagRef = useRef();
  const scrabRef = useRef();
  const postRef = useRef();

  const getTitleHtml = () => {
    if (titleRef && titleRef.current) {
      return titleRef.current.getInnerHTML();
    }
  };
  const getTagHtml = () => {
    if (tagRef && tagRef.current) {
      return tagRef.current.getInnerHTML();
    }
  };
  const getScrabHtml = () => {
    if (scrabRef && scrabRef.current) {
      return scrabRef.current.getInnerHTML();
    }
    return "";
  };
  const getPostHtml = () => {
    if (postRef && postRef.current) {
      return postRef.current.getInnerHTML();
    }
    return "";
  };
  const saveMemo = async () => {
    const titleHtml = getTitleHtml();
    const tagHtml = getTagHtml();
    const scrabHtml = getScrabHtml();
    const postHtml = getPostHtml();
    const requestData = {
      title: titleHtml,
      tags: tagHtml,
      content: scrabHtml,
      memo: postHtml,
      url: window.location.href,
      image_url:
        "https://blog.kakaocdn.net/dn/clyrhv/btqXJVvfOgF/1lMKjoQo3iW0pyYDmV2HVK/img.jpg",
    };
    console.log(requestData);
    try {
      const response = await api.post("/api/post", requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Container">
      <div className="Menu-Container">
        {letters.map((letter) => (
          <span
            key={letter}
            className={letter}
            onClick={() => toggleSelected(letter)}
            style={getCircleStyle(letter)}
          >
            {letter}
          </span>
        ))}
      </div>
      {selectedComponent === "E" && (
        <>
          <div className="postEditContainer">
            {" "}
            <Title ref={titleRef} />
            <Tag ref={tagRef} />
            <Scrab ref={scrabRef} getStyledContent={getStyledContent} />
            <Post ref={postRef} />
            <button className="saveBtn" onClick={saveMemo}>
              저장
            </button>
          </div>
        </>
      )}
      {selectedComponent === "V" && <View />}
      {selectedComponent === "U" && <Update />}
    </div>
  );
};

export default Menu;
