// src/hooks/useSelectionChange.js
import { useCallback } from "react";

const useSelectionChange = (setSelectedHtml, setComputedStyles, isDragging) => {
  const handleSelectionChange = useCallback(() => {
    if (isDragging) return;
    //드래그 할 위치
    const selection = window.getSelection();
    const selectedRange = selection.getRangeAt(0);

    // temp div 생성 스크랩 할 내용의 스타일을 추출하는 div
    const tempDiv = document.createElement("div");
    tempDiv.style.maxWidth = "100%";
    tempDiv.appendChild(selectedRange.cloneContents());

    // 선택된 영역 스타일 가져옴
    const computedStyles = window.getComputedStyle(
      selection.anchorNode.parentElement
    );

    // 추출한 스타일들을 정의
    const styles = {
      color: computedStyles.color,
      fontSize: computedStyles.fontSize,
      fontWeight: computedStyles.fontWeight,
      // Add other styles you are interested in
    };

    // 스타일 상태 업데이트
    setComputedStyles(styles);

    // tempDiv에 적용
    setSelectedHtml(tempDiv.innerHTML);
  }, [isDragging]);

  return handleSelectionChange;
};

export default useSelectionChange;
