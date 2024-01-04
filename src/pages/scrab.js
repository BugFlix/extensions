import React, { useState, forwardRef, useImperativeHandle } from "react";

const Scrab = forwardRef(({ getStyledContent }, ref) => {
  const [savedContent, setSavedContent] = useState("");

  // 내용을 저장하고 새로운 div로 보여주는 함수
  const handleSaveAndShowNewDiv = () => {
    // 현재 내용을 저장
    const currentContent = getStyledContent();
    setSavedContent(currentContent);
  };

  // Expose a method to the parent component using useImperativeHandle
  useImperativeHandle(ref, () => ({
    // You can expose any methods or properties here
    handleSaveAndShowNewDiv,
    getInnerHTML: () => {
      return document.getElementById("scrab-box").innerHTML;
    },
  }));

  return (
    <div id="scrab-box" className="scrab-box">
      {savedContent && <div className="newdiv">{savedContent}</div>}
      <button className="but" onClick={handleSaveAndShowNewDiv}>
        스크랩
      </button>
    </div>
  );
});

export default Scrab;
