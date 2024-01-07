import React, { forwardRef, memo, useState, useImperativeHandle } from "react";
import "../components/title.css";
const Title = forwardRef((props, ref) => {
  const [memoTitle, setMemoTitle] = useState("");
  const handleMemoTitle = (e) => {
    setMemoTitle(e.target.value);
  };
  useImperativeHandle(ref, () => ({
    getInnerHTML: () => {
      return memoTitle;
    },
  }));
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
});
export default Title;
