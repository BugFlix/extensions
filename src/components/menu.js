import React, { useState, useRef } from "react";
import useDragDetect from "../hooks/useDragDetect";
import useSelectionChange from "../hooks/useSelectionChange";
import useStyledContent from "../hooks/useStyledContent";
import Scrab from "../pages/scrab";
import View from "../pages/view";
import Post from "./post";
import Tag from "./tag";
import Title from "./title";

const Menu = () => {
  const [selectedHtml, setSelectedHtml] = useState("");
  const [computedStyles, setComputedStyles] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const letters = ["E", "V"]; // Add more letters if needed
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
    width: "45%",
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
  const scrabRef = useRef();
  const postRef = useRef();

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
  const saveMemo = () => {
    const scrabHtml = getScrabHtml();
    const postHtml = getPostHtml();
    console.log(scrabHtml);
    console.log(postHtml);
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
          <Title />
          <Tag />
          <Scrab ref={scrabRef} getStyledContent={getStyledContent} />
          <Post ref={postRef} />
          <button className="saveBtn" onClick={saveMemo}>
            저장
          </button>
        </>
      )}
      {selectedComponent === "V" && <View />}
    </div>
  );
};

export default Menu;
