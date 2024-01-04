import { useRef, useState, useCallback } from "react";

const useMemoEditor = () => {
  const editorRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    insertOrderedList: false,
    insertUnorderedList: false,
  });
  //스타일 지정
  const setStyle = useCallback((style, value = null) => {
    document.execCommand(style, false, value);
    focusEditor();
  }, []);
  // 현재 위치를 집중적으로
  const focusEditor = useCallback(() => {
    editorRef.current.focus({ preventScroll: true });
  }, []);
  //현재 타깃에 폰트크기 적용
  const handleFontSizeChange = useCallback(
    (e) => {
      const selectedFontSize = e.target.value;
      setStyle("fontSize", selectedFontSize);
    },
    [setStyle]
  );
  //현재 타깃에 폰트 색상 적용
  const handleColorChange = useCallback(
    (newColor) => {
      setColor(newColor.hex);
      setStyle("foreColor", newColor.hex);
    },
    [setStyle]
  );
  // 색상 고르기 구글 라이브러리
  const toggleColorPicker = useCallback(() => {
    setShowColorPicker((prev) => !prev);
  }, []);
  //버튼 클릭됬다는 표시
  const handleStyleClick = useCallback(
    (style) => {
      setStyle(style);
      setActiveStyles((prevActiveStyles) => ({
        ...prevActiveStyles,
        [style]: !prevActiveStyles[style],
      }));
    },
    [setStyle]
  );

  return {
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
  };
};

export default useMemoEditor;
