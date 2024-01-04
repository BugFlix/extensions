import React, { forwardRef, useImperativeHandle } from "react";
import "../components/Post.css";
import EditorMenu from "./editormenu";
import useMemoEditor from "../hooks/useMemoEditor";

const Post = forwardRef((props, ref) => {
  const {
    editorRef,
    color,
    showColorPicker,
    activeStyles,
    setStyle,
    focusEditor,
    handleFontSizeChange,
    handleColorChange,
    toggleColorPicker,
    handleStyleClick,
  } = useMemoEditor();

  useImperativeHandle(ref, () => ({
    getInnerHTML: () => {
      return editorRef.current.innerHTML;
    },
  }));
  return (
    <div className="post-box">
      <EditorMenu
        activeStyles={activeStyles}
        handleStyleClick={handleStyleClick}
        handleFontSizeChange={handleFontSizeChange}
        toggleColorPicker={toggleColorPicker}
        showColorPicker={showColorPicker}
        color={color}
        handleColorChange={handleColorChange}
      />
      <div id="editor" ref={editorRef} contentEditable="true"></div>
    </div>
  );
});

export default Post;
