import React, { memo, useState } from "react";
import "../components/title.css";
const Title = () => {
  const [memoTitle, setMemoTitle] = useState("");
  const handleMemoTitle = (e) => {
    setMemoTitle(e.target.value);
  };
  return (
    <div className="title-container">
      <textarea
        type="text"
        placeholder="제목을 입력하세요..."
        value={memoTitle}
        onChange={handleMemoTitle}
      />
    </div>
  );
};
export default Title;
