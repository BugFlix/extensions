import React, { useState } from "react";
import "../components/tag.css";

const Tag = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //입력값 입력
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //엔터시 태그 생성
  const handleEnterPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div className="tag-container">
      <span>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </span>
      <input
        type="text"
        placeholder="태그를 입력하세요..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
      />
    </div>
  );
};

export default Tag;
