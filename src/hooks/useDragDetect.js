import { useEffect } from "react";
const useDragDetect = (handleSelectionChange, setIsDragging) => {
  useEffect(() => {
    const handleDragStart = () => {
      setIsDragging(true);
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragend", handleDragEnd);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragend", handleDragEnd);
    };
  }, [handleSelectionChange, setIsDragging]);
};
export default useDragDetect;
