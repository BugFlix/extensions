import React from "react";
const useStyledContent = (computedStyles, selectedHtml) => {
  const getStyledContent = () => {
    const inlineStyle = {
      color: computedStyles.color,
      fontSize: computedStyles.fontSize * 0.5,
      fontWeight: computedStyles.fontWeight,
    };

    return (
      <div
        style={inlineStyle}
        dangerouslySetInnerHTML={{ __html: selectedHtml }}
      />
    );
  };

  return getStyledContent;
};

export default useStyledContent;
